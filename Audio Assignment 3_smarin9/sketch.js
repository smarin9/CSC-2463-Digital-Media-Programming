var title;
var osc;
var osc2;
var ampEnv;
var synth1;
var synth2;
var oscNoise;
var ampEnvNoise;
var filter;
var lfo;
var dive;

function preload()
{
        dive = loadImage("dive.jpg");
}

function setup() {
                image(dive, 0, 0);

                mSynth = new Tone.MonoSynth({
                "oscillator":{
                    "type" : "square"
                },
                "envelope": {
                    "attack" : 0.0
                }
                }).toMaster();

                oscNoise1 = new Tone.Noise().start();
                oscNoise = new Tone.Noise().start();
                filter = new Tone.Filter(2000,"lowpass");
                lfo = new Tone.LFO(10, -64, 0).start();
                lfo2 = new Tone.LFO(0, -64, 0).start();

                osc = new Tone.Oscillator(440, "triangle").start();
                osc2 = new Tone.Oscillator(660, "sawtooth6").start();
                osc2.volume.value = -90;

                ampEnv = new Tone.AmplitudeEnvelope({
                                "attack": 0.8,
                                "decay": 0.8,
                                "sustain": .02,
                                "release": 0.0
                }).toMaster();

                ampEnvNoise = new Tone.AmplitudeEnvelope({
                                "attack": 0.0,
                                "decay": 0,
                                "sustain": 5,
                                "release": 0.0
                }).toMaster();
                
                osc.frequency.value = 'Bb4';

                lfo.connect(oscNoise.volume);
                lfo2.connect(oscNoise1.volume);
                
                oscNoise.connect(ampEnv);
                oscNoise1.connect(ampEnvNoise);
 
                oscNoise1.connect(filter);
                oscNoise.connect(filter);
                filter.connect(ampEnvNoise);

}
 
function draw() {
                createCanvas(564, 800);
                background(255, 215, 0);
                textSize(20);
                text("Press, hold, and release to hear the \n     flip and splash sound effect!",120, 300);
                if (mouseIsPressed)
                {
                    image(dive, 0, 0);
                    ampEnv.triggerAttackRelease(10,"+0.0");
                    mSynth.triggerAttackRelease(7, "0.0");
                }
}


function mouseReleased()
{
    if (mouseReleased)
    {
        ampEnvNoise.triggerAttackRelease(8,"+0.0");
    }
}

