function setup() {
	createCanvas(1000, 1000);
}

function target(x, y)
{
	fill(255, 0, 0);
	ellipse(x, y, 50, 50);
	fill(255, 255, 255);
	ellipse(x, y, 40, 40);
	fill(255, 0, 0);
	ellipse(x, y, 30, 30);
	fill(255, 255, 255);
	ellipse(x, y, 20, 20);
	fill(255, 0, 0);
	ellipse(x, y, 10, 10);
}

function keyPressed()
{
	if(keyCode === SHIFT)
	{
		targetIsVisible = true;
	}
}

function keyReleased()
{
	if (keyCode === SHIFT)
	{
	targetIsVisible = false;
	}
}


var targetIsVisible = false;

function draw() 
{
	background(255);
	if (targetIsVisible)
	{
	for (var x = 0; x < 10; x++)
	{
		for (var y = 0; y < 10; y++)
		{
		target(x * 50, y * 50);
		}
	}
	}
}