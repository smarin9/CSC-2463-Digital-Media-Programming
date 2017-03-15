var bug = [];
var count = 40;
var size = 80;
var score = 0;
var time = 30;
var s = 0;
var startTime = 0;
var bool = true;
var moving = 0;
var state = 0;
var player;
var distory;
var playButton;
var lfo;
var lfo2;
var lfo3;
var lfo4;
var osc;
var ampEnv;
var squashNoise;
var tremolo;
var lfoSpeed = 10;


function preload()
{
        //Preloads the bug spritesheet
        for (var i = 0; i < count; i++)
        {
            bug[i] = new BugCrawler("Bugs.png", random(560) + 40, random(400) +20, random([-1, +1]), bool);
        }
        distory = new Tone.Distortion(10).toMaster();
        distory.toMaster();
        player = new Tone.Player("BugSquishAudio.mp3").toMaster();
        player.volume.value = -30;
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
    bug[i].crush(mouseX, mouseY);
  }
}

function setup() 
{
        //Canvas 
        createCanvas(640, 480);
        imageMode(CENTER);
        squashNoise = new Tone.NoiseSynth();
        squashNoise.volume.value = +20;
        tremolo = new Tone.Tremolo().toMaster();
        squashNoise.connect(tremolo);

        oscNoise = new Tone.Noise().start();
        filter = new Tone.Filter(2000,"lowpass");
        lfo = new Tone.LFO(lfoSpeed, -64, -10).start();

        osc = new Tone.Oscillator(440, "triangle").start();

        ampEnv = new Tone.AmplitudeEnvelope({
                        "attack": 0,
                        "decay": 0,
                        "sustain": 0,
                        "release": 0
        }).toMaster();

        lfo.connect(oscNoise.volume);
        
        oscNoise.connect(ampEnv);
        oscNoise.volume.value = -150;
        oscNoise.connect(filter);

}

function play()
{
    player.start();
}

function stop()
{
    player.stop();
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
              startTime = second(30);
              player.connect(distory);
              player.start();
              ampEnv.triggerAttackRelease(70,"+0.0");
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
            player.stop();
            oscNoise.stop();
          }
        }

        //Game Over Screen
        if (state == 2)
        {
          fill(255, 255, 255);
          textSize(50);
          textFont("George");
          text("GAME OVER", 150, 100);
          textSize(25);
          text("You squished " + score + " bugs!", 190, 150);
          text("Refresh to try again!", 202, 200);
        }

        //Win Screen - The user squished the maximum amount of bugs
        if (score == 40)
        {
          state = 3;
          if (state == 3){
           text("You squished all 40 bugs!", 180, 200);
           text("Refresh to play again!", 202, 240);}
           player.stop();
           oscNoise.stop();
        }

        clicked();
}

function BugCrawler(imageName, x, y, moving, bool)
{
    this.spritesheet = loadImage(imageName);
    this.frame = 0;
    this.x = x;
    this.y = y;
    this.moving = moving;
    this.facing = moving;
    this.bool = bool;

    this.draw = function() 
    {
          
          push();
          translate(this.x, this.y);
          if (this.facing < 0)
          {
            scale(-1.0, 1.0);
          }
      if(this.bool == true)
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

                  if (score >= 5)
                  {
                    player.playbackRate = 1.3;
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

                  if (score >= 10)
                  {
                    player.playbackRate = 1.4;
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

                  if (score >= 15)
                  {
                    player.playbackRate = 1.5;
                     if (frameCount % -1 == 0)
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

  this.crush = function(x, y)
  {

    //Crushes the bugs as the user clicks on top of a bug. After each bug is squished, the User's
    //score increases.
    if (this.x -40 < x && x < this.x + 40 && this.y -40 < y && y < this.y + 40)
    {
      this.moving = 0;
      this.mouseX = x;
      this.mouseY = y;
      this.initialX = this.x;
      this.initialY = this.y;
      if (this.bool == true)
      {
        score++;
        squashNoise.triggerAttackRelease("16n");
      }
      this.bool = false;
    }
  }

}






