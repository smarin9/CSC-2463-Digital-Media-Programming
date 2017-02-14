function setup() {
createCanvas(200, 100);
}

function draw() {
    background('#222222');
    fill('rgb(246,255,0)');
    arc(50, 50, 80, 80, 85.5, PI-QUARTER_PI, PIE);
    
    fill('rgb(255,0,0)');
    ellipse(150, 48, 80, 80);
    noStroke();
    rect(110, 50, 80, 40);
    
    ellipseMode(RADIUS);  
	fill(255);  
	ellipse(130, 48, 13, 13); 
	ellipse(170, 48, 13, 13);

	ellipseMode(CENTER);  
	fill('rgb(0, 0, 255)');  
	ellipse(130, 48, 15, 15);  
	ellipse(170, 48, 15, 15);
	
}
