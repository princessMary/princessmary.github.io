var x = 300;
var y = 300;
var nappi;
var bgcolor;

function setup() {
	createCanvas(windowWidth, windowHeight-100);
	background(255);
//	nappi = createButton("next");
//  nappi.position(windowWidth-100, 20);
//  nappi.mousePressed(changeColor);

}
function changeColor(){
  h1.html("Dr. Snow knows everything");
  bgcolor = color(random(255));
  //  createP("Try me " + random(0,100) + " times!");
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
