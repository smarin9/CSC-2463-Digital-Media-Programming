var colorRed = '#FF0000';
var colorOrange = '#FF8000';
var colorYellow = '#FFFF00';
var colorGreen = '#008000';
var colorCyan = '#00FFFF';
var colorBlue = '#0000FF';
var colorMagenta = '#FF00FF';
var colorBrown = '#663300';
var colorWhite = '#FFFFFF';
var colorBlack = '#000000';
var colorChoice = '#FF0000';
var lineThickness = 10;
var mouseClick = false;

function setup() 
{
	createCanvas(1000, 1000);
}

function clicked()
{
	if (mouseIsPressed)
	{
		mouseClick = true;
	}
	else
	{
		mouseClick = false;
	}   return false;
}
	
function draw() 
{
   noStroke();
   fill(colorRed);
   rect(0, 0, 25, 25);
   fill(colorOrange);
   rect(0, 25, 25, 25);
   fill(colorYellow);
   rect(0, 50, 25, 25);
   fill(colorGreen);
   rect(0, 75, 25, 25);
   fill(colorCyan);
   rect(0, 100, 25, 25);
   fill(colorBlue);
   rect(0, 125, 25, 25);
   fill(colorMagenta);
   rect(0, 150, 25, 25);
   fill(colorBrown);
   rect(0, 175, 25, 25);
   fill(colorWhite);
   rect(0, 200, 25, 25);
   fill(colorBlack);
   rect(0, 225, 25, 25);
   ellipse(12, 256, 10, 10);
   ellipse(12, 275, 15, 15);
   ellipse(12, 300, 20, 20);

   if (mouseX >= 0 && mouseX <= 10 && mouseY >= 250 && mouseY <= 275 && mouseClick == true)
   {
         lineThickness = 10;
   }
   if (mouseX >= 0 && mouseX <= 15 && mouseY >= 300 && mouseY <= 325 && mouseClick == true)
   {
         lineThickness = 15;
   }
   if (mouseX >= 0 && mouseX <= 20 && mouseY >= 350 && mouseY <= 375 && mouseClick == true)
   {
         lineThickness = 20;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 0 && mouseY <= 25 && mouseClick == true)
   {
   		colorChoice = colorRed;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 25 && mouseY <= 50 && mouseClick == true)
   {
   		colorChoice = colorOrange;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 50 && mouseY <= 75 && mouseClick == true)
   {
   		colorChoice = colorYellow;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 75 && mouseY <= 100 && mouseClick == true)
   {
   		colorChoice = colorGreen;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 100 && mouseY <= 125 && mouseClick == true)
   {
   		colorChoice = colorCyan;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 125 && mouseY <= 150 && mouseClick == true)
   {
   		colorChoice = colorBlue;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 150 && mouseY <= 175 && mouseClick == true)
   {
   		colorChoice = colorMagenta;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 175 && mouseY <= 200 && mouseClick == true)
   {
   		colorChoice = colorBrown;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 200 && mouseY <= 225 && mouseClick == true)
   {
   		colorChoice = colorWhite;
   }
   if (mouseX >= 0 && mouseX <= 25 && mouseY >= 225 && mouseY <= 250 && mouseClick == true)
   {
   		colorChoice = colorBlack;
   }

   		if(mouseIsPressed)
   		{
   			strokeWeight(lineThickness);
   			stroke(colorChoice);
   			line(pmouseX,pmouseY,mouseX,mouseY);
 		}  	
   clicked();
}




		



