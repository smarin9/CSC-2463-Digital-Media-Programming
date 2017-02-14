var bug = [];
var count = 40;
var size = 80;
var score = 0;
var time = 30;
var s = 0;
var startTime = 0;
var dead = true;
var moving = 0;
var state = 0;


function preload()
{
        //Preloads the bug spritesheet
      	for (var i = 0; i < count; i++)
      	{
      		bug[i] = new BugCrawler("Bugs.png", random(560) + 40, random(400) +20, random([-1, +1]), dead);
      	}
}

function clicked()
{
        //Mouse Click Function
      	if (mouseIsPressed)
      	{
      		mouseClick = true;
      	}
      	else
      	{
      		mouseClick = false;
      	}   
        return false;
}

function mousePressed()
{
  //Squishes the bug when the user clicks on a bug
  for (var i = 0; i < count; i++)
  {
    bug[i].squish(mouseX, mouseY);
  }
}

function setup() 
{
        //Canvas 
      	createCanvas(640, 480);
      	imageMode(CENTER);
}

function draw()
{
      	background(0, 128, 0);

        //Start Screen
        if (state == 0)
        {
            textSize(85);
            fill(255,255,255);
            textFont("George");
            text("Bug Squish Game", 10, 100);
            textSize(20);
            text("How many bugs can you squish in 30 seconds?", 115, 150);
            fill(255, 255, 255);
            textSize(12);
            text("START", 285, 250);
            fill(0, 0, 150, 50);
            ellipse(304, 245, 100, 50);
            if(mouseX >= 230 && mouseX <= 330 && mouseY >= 200 && mouseY <=250 && mouseClick == true)
            {
              state = 1;
              startTime = second();
            }
        }

        //Gameplay Screen
        if (state == 1)
        {
          s = second();
          time = 30-(abs(startTime - s));
          for(var i = 0; i < count; i++)
          {
            bug[i].draw();
            textSize(24);
          }
          textAlign(LEFT);
          text("Score: " + score, 0, 25);
          fill(255, 255, 255);
          textAlign(LEFT);
          text("Time: " + time, 0, 50);
          if (time == 0)
          {
            state = 2;
          }
        }

        //Game Over Screen
        else if (state == 2)
        {
          fill(255, 255, 255);
          textSize(50);
          textFont("George");
          text("GAME OVER", 150, 100);
          textSize(25);
          text("You squished " + score + " bugs!", 190, 150);
          text("Try Again!", 250, 230);
          fill(0, 0, 150, 50);
          ellipse(304, 220, 150, 50);
          if (mouseX >= 230 && mouseX <= 330 && mouseY >= 200 && mouseY <=250 && mouseClick == true)
          {
            state = 1;
            startTime = second();
          }
        }
        clicked();
}

function BugCrawler(imageName, x, y, moving, dead)
{
	this.spritesheet = loadImage(imageName);
	this.frame = 0;
	this.x = x;
	this.y = y;
	this.moving = moving;
	this.facing = moving;
	this.dead = dead;

	this.draw = function() 
	{
		  
		  push();
		  translate(this.x, this.y);
		  if (this.facing < 0)
		  {
		  	scale(-1.0, 1.0);
		  }
      if(this.dead == true)
      {

          		  if (this.moving == 0)
          		  {
          		  	image(this.spritesheet, 0, 0, 80, 80, 0, 0, 80, 80);
          		  }
          		  else
          		  {
            		  if (this.frame == 0)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 80, 0, 80, 80);
            		  if (this.frame == 1)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 160, 0, 80, 80);
            		  if (this.frame == 2)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 240, 0, 80, 80);
            		  if (this.frame == 3)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 320, 0, 80, 80);
            		  if (this.frame == 4)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 400, 0, 80, 80);
            		  if (this.frame == 5)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 480, 0, 80, 80);
            		  if (this.frame == 6)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 560, 0, 80, 80);
            		  if (this.frame == 7)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 640, 0, 80, 80);
                
                  //Increases the speed of the bugs as the user's score gets higher
            		  if (frameCount % 4 == 0)
                  {
                    			   this.frame = (this.frame + 1) % 8;
                    			   this.x = this.x + 6 * this.moving;
                             if(this.x < 40 || this.x > width - 40)
                             {
                                    this.moving = -this.moving
                                    this.facing = -this.facing
                             }
            		  }

                  if (score >= 5)
                  {
                     if (frameCount % 3 == 0)
                  {
                             this.frame = (this.frame + 1) % 8;
                             this.x = this.x + 6 * this.moving;
                             if(this.x < 40 || this.x > width - 40)
                             {
                                    this.moving = -this.moving
                                    this.facing = -this.facing
                             }
                  }
                  }

                  if (score >= 10)
                  {
                     if (frameCount % 2 == 0)
                  {
                             this.frame = (this.frame + 1) % 8;
                             this.x = this.x + 6 * this.moving;
                             if(this.x < 40 || this.x > width - 40)
                             {
                                    this.moving = -this.moving
                                    this.facing = -this.facing
                             }
                  }
                  }

                  if (score >= 15)
                  {
                     if (frameCount % 1 == 0)
                  {
                             this.frame = (this.frame + 1) % 8;
                             this.x = this.x + 6 * this.moving;
                             if(this.x < 40 || this.x > width - 40)
                             {
                                    this.moving = -this.moving
                                    this.facing = -this.facing
                             }
                  }
                  }
              }
      }
      else
      {
                image(this.spritesheet, 0, 0, 80, 80, 880, 0, 80, 80);
      }
		  pop();  
	}

	this.stop = function()
	{
		this.moving = 0;
		this.frame = 3;
	}

	this.go = function(direction)
	{
		this.moving = direction;
		this.facing = direction;
	}

  this.squish = function(x, y)
  {

    //Squishes the bugs as the user clicks on top of a bug. After each bug is squished, the User's
    //score increases.
    if (this.x -40 < x && x < this.x + 40 && this.y -40 < y && y < this.y + 40)
    {
      this.moving = 0;
      this.mouseX = x;
      this.mouseY = y;
      this.initialX = this.x;
      this.initialY = this.y;
      if (this.dead == true)
      {
        score++;
      }
      this.dead = false;
    }
  }

}






