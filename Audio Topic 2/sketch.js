var hi = "Hi there";
var synth;
var player;
var distorty;

function setup() {
	createCanvas(600,400);

	synth = new Tone.Synth().toMaster();

	synth.triggerAttackRelease(440,2);

	distorty = new Tone.Distortion(0.8).toMaster();

	player = new Tone.Player("DJSNAKE.mp3").connect(distorty);

	//player.connect(distorty);
	//distorty.toMaster();

	player.autostart = true;

	player.playbackRate = 2.0;
}

function draw() {
	fill(255);
		rect(0,0,width,height);
		fill(200, 0, 255);
		textAlign(10,10);
		text(hi, 10, 50);  
}