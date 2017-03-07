var turtle;
var angle = 0;
var score = 0;

function preload()
{
	turtle = loadImage("turtle.png");

}

function setup() {
	createCanvas(640, 480);
	turtle = loadImage("turtle.png");
	imageMode(CENTER);
	textFont("Arial");
}

function draw() {
  	background(0, 255, 0);
  	
  	fill(0);
  	textSize(100);
  	text("Score: " + score, 100, 100);
  	
  	translate(mouseX, mouseY);
  	//rotate(radians(angle));
  	scale(1.0, 1.0);
  	image(turtle, 0, 0, 128, 128);
  	angle = angle + 1;
  	score = score + 1;
}