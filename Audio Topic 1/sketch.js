var hi = "Hi There";
var synth;
var player;

function setup() {
	createCanvas(600,400);

	synth = new Tone.Synth().toMaster();


  
	synth.triggerAttackRelease(440, 2);

	var player = new Tone.player("").toMaster();
	player.autostart = true;


}

function draw() {
	fill(255);
	
}