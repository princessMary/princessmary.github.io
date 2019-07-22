let extraCanvas;
let imageCanvas;

let img;
var x;
var y;
// images downloaded from https://ayoqq.org and https://www.beautybay.com/p/milani/colour-statement-moisture-matte-lipstick/
function preload() {
	imgf1 = loadImage('n1.png');
  imgf2 = loadImage('n2.png');
	imgf3 = loadImage('n3.png');
	imgf4 = loadImage('n4.png');
	imgf5 = loadImage('n5.png');
	imgf6 = loadImage('n7.png');
	imge1 = loadImage('eye1.png');
	imge2 = loadImage('eye2.png');
	lip = loadImage('lip.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	var sec = second();

	extraCanvas = createGraphics(windowWidth, windowHeight);
	extraCanvas.clear();
//	extraCanvas.background(255);
	imageCanvas = createGraphics(windowWidth, windowHeight);
	imageCanvas.clear();
	frameRate(30);

}

function draw() {
// selection

	imageCanvas.image(lip, 1, 200);

	if (frameCount %400 ==0 ){
			imageCanvas.clear();
			extraCanvas.clear();
			clear();
			}
	if (mouseIsPressed == false){
	var s = second();
	if (s %3== 0 && s%2==0){
	extraCanvas.image(imgf2, windowWidth/4-120, 80);
	} else if (s< 30){
	extraCanvas.image(imgf5, windowWidth/4-120, 80);
	} else if (s==21 || s%7 == 0){
	extraCanvas.image(imgf4, windowWidth/4-120, 80);
	} else {
	extraCanvas.image(imgf3, windowWidth/4-120, 80);

		}

	}
	//background(255);

	image(extraCanvas, 0,0);
	image(imageCanvas, 0,0);
	noFill();
	strokeWeight(4);
	textStyle(NORMAL);
	textSize(40);
	text('Put some lipstick on Mary', 50, 50);

	noFill();
	stroke(255, 102, 0);


	//mouth

	strokeWeight(5);
	var x = windowWidth/2;
	var y = windowHeight/2+70;
	noFill();
	//fill(100,100,100,200);
	stroke(100,1,1, 50);
	//let t = map(mouseX, 0, width, -3, 3);
  //curveTightness(t);
	beginShape();
	curveVertex(x+32, y+18);
	curveVertex(x+30, y+17);
	curveVertex(x+75, y+40);
	curveVertex(x+30, y+70);
	curveVertex(x-20, y+28);
	curveVertex(x+75, y+40);
	curveVertex(x-20, y+28);
	curveVertex(x+35, y+19);
	curveVertex(x+41,y+18);
	endShape();


//lipstick selection

if (mouseIsPressed) {
	extraCanvas.image(imgf2, windowWidth/4-120, 80);
	var rar = random(-25,25);
	var sec = second();
	if (sec%4==0){
	extraCanvas.image(imgf2, windowWidth/4-120, 80);
	}
	if (mouseX > 0 && mouseX < 100 && mouseY > 50 && mouseY < 300) {
		imageCanvas.fill(255,20,147,150);
	} else if (mouseX > 100 && mouseX < 150 && mouseY > 50 && mouseY < 300) {
		imageCanvas.fill(255,0,0,150);
	} else if (mouseX > 150 && mouseX < 250 && mouseY > 50 && mouseY < 300) {
		imageCanvas.fill(165,42,42,150);
	}

  imageCanvas.noStroke();
//	imageCanvas.fill(200+rar,10,10,150);

	//lipstick
	if (sec%7==0){
		imageCanvas.ellipse((mouseX+rar), (mouseY+rar), 20, 20);
		extraCanvas.image(imge1,(windowWidth/2.6 +45)+(mouseX/50-7), (windowHeight/3-2)+(mouseY/30-10), 49, 49);
		extraCanvas.image(imge2,(windowWidth/1.7+20)+(mouseX/50-8), (windowHeight/3+24)+(mouseY/30-10), 49, 49);
	} else {
		imageCanvas.ellipse((mouseX), (mouseY), 20, 20);
		extraCanvas.image(imge1,(windowWidth/2.6 +45)+(mouseX/50-7), (windowHeight/3-2)+(mouseY/30-10), 49, 49);
		extraCanvas.image(imge2,(windowWidth/1.7+20)+(mouseX/50-8), (windowHeight/3+24)+(mouseY/30-10), 49, 49);
	}

}

}
