var x = 300;
var y = 300;


function setup() {
	createCanvas(windowWidth, windowHeight-100);
	background(255);

}

function draw() {
  if (mouseIsPressed){
    var rar = random(-40,40);
    var ran = random(-50,50);
  	noStroke();
  	fill(x/2,y/2,random(50,255), random(0,255));
  	ellipse(mouseX+rar, mouseY+ran, 20, 20);
    x = mouseX
    y = mouseY
  	x = x + random(-30,30);
  	y = y + random(-30,30);

  	if (x>width){
  		x = x-100;
  	} else if(x<0){
  		x = random(100,300);
  	} else if(y > height){
  	  y = y-100;
  	} else if (y< 0){
  		y = random(10,100);
  	}
  }
}
