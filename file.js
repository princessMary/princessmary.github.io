let x = 300;
let y = 300;
let num = 2000;
let range = 6;
let ax = [];
let ay = [];
let theta;
let xx = [0, 0],
  yy = [0, 0],
  segLength = 50;
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape
let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
let numBalls = 13;
let spring = 0.05;
let gravity = 0.03;
let friction = -0.9;
let balls = [];
let angle = 0;
var input;
let yoff = 0.0;
let i = 1;
let ikkunoidenLKM = 11;
let sketch;

function handleClick(sketch) {
  clear();
 // window.selectedSketch = sketch;
  if (sketch === 'next' && i<= ikkunoidenLKM) {
    i ++ ;
    window.selectedSketch = i;
  } else if (sketch === 'same'){
    window.selectedSketch = i;
  } 
  else if (i> ikkunoidenLKM){
    i = 1;
  }

}
window.selectedSketch = i;

function drawSketch1() {
  if (mouseIsPressed) {
    var rar = random(-40, 40);
    var ran = random(-50, 50);
    noStroke();
    fill(x / 2, y / 2, random(50, 255), random(0, 255));
    ellipse(mouseX + rar, mouseY + ran, 20, 20);
    x = mouseX;
    y = mouseY;
    x = x + random(-30, 30);
    y = y + random(-30, 30);

    if (x > width) {
      x = x - 100;
    } else if (x < 0) {
      x = random(100, 300);
    } else if (y > height) {
      y = y - 100;
    } else if (y < 0) {
      y = random(10, 100);
    }
  }
}

function drawSketch2() {
  if (mouseIsPressed){
    var rar = random(-40,40);
    var ran = random(-50,50);
    noStroke();
    fill(x/2,y/2,random(50,255), random(0,255));
    ellipse(mouseX+rar, mouseY+ran, 200, 200);
    x = mouseX
    y = mouseY
    x = x + random(-130,130);
    y = y + random(-130,130);

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

function drawSketch3() {
  if (mouseIsPressed){
    var rar = random(-400,400);
    var ran = random(-500,500);
    noStroke();
    fill(x/2,y/2,random(50,255), random(0,255));
    triangle(mouseX+rar-20, mouseY+ran+55, mouseX+rar+30, mouseY+ran+20, mouseX+rar+70, mouseY+ran+10);
    x = mouseX
    y = mouseY
    x = x + random(-130,130);
    y = y + random(-130,130);

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
function drawSketch4() {
  if (mouseIsPressed){
    var rar = random(-40,40);
    var ran = random(-50,50);
    noStroke();
    fill(x/2,y/2,200, 200);
    ellipse(mouseX+rar, mouseY+ran, 20+ran, 20+ran);
    x = mouseX
    y = mouseY
    x = x + random(-130,130);
    y = y + random(-130,130);

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
function drawSketch5() {
  // https://p5js.org/examples/interaction-follow-2.html
  // https://p5js.org/examples/interaction-follow-3.html
  background(0);
  strokeWeight(20.0);
  stroke(255, 100);
  dragSegment(0, mouseX, mouseY);
  dragSegment(1, xx[0], yy[0]);

}
function dragSegment(i, xin, yin) {
  const dx = xin - xx[i];
  const dy = yin - yy[i];
  const angle = atan2(dy, dx);
  xx[i] = xin - cos(angle) * segLength;
  yy[i] = yin - sin(angle) * segLength;
  segment(xx[i], yy[i], angle);
}

function segment(xx, yy, a) {
  push();
  translate(xx, yy);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight - 100);
//	extraCanvas = createGraphics(windowWidth, windowHeight - 100);
//	extraCanvas.clear();
//	imageCanvas = createGraphics(windowWidth, windowHeight-100);
	background(255);
  for ( let i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(30);

  // get the width and height of the text so we can center it initially

  x = width / 2
  y = height / 2

  // if (window.selectedSketch === 'sketch5'){
  //   for (var i = 0; i<10; i++){
  //     var x = random(width);
  //     var y = random(height);
  //     bubbles.push(new Bubble(x,y,random(10, 200)));
  //   }

  // }
  //
  // unicorn1 = new Unicorn(200,200, 40);
  // unicorn2 = new Unicorn(400,200, 20);
  strokeWeight(20.0);
  stroke(255, 100);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;

  for (let i = 0; i < numBalls; i++) {
  balls[i] = new Ball(
    random(width),
    random(height),
    random(30, 70),
    i,
    balls
  );
  }
  // input = new p5.AudioIn();
  // input.start();

}
function drawSketch6() {
  //https://p5js.org/examples/motion-bounce.html
  background(mouseX/2, 100 , mouseY/2, 100);
  noStroke();
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
    fill(random(0, 255), random(0, 255), random(50, 255), random(0, 255));
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
    fill(random(0, 255), random(0, 255), random(50, 255), random(0, 255));
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function drawSketch7() {
  background(0);
  fill(255, 204);
  noStroke();
  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });


}
function drawSketch8() {
  // https://p5js.org/examples/simulate-brownian-motion.html
  background(51);
  strokeWeight(1);
   // Shift all elements 1 place to the left

  for ( let i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw a line connecting the points
  for ( let j = 1; j < num; j++ ) {
    let val = j / num * 204.0 + 51;
    stroke(val);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }


}

function drawSketch9() {
  // https://p5js.org/examples/simulate-recursive-tree.html
  background(0);
  frameRate(30);
  stroke(255);
  strokeWeight(1);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  let a = (mouseX / width) * 90;
  // Convert it to radians
  theta = radians(a);
  // Start the tree from the bottom of the screen
  translate(width/2,height*0.7);
  // Draw a line 120 pixels
  line(0,0,0,-120);
  // Move to the end of that line
  translate(0,-120);
  // Start the recursive branching!
  branch(120);

}
function branch(h) {
  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);   // Rotate by theta
    line(0, 0, 0, -h);  // Draw the branch
    translate(0, -h); // Move to the end of the branch
    branch(h);       // Ok, now call myself to draw two new branches!!
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}

function drawSketch10() {
  // https://p5js.org/examples/interaction-tickle.html
//   image(img, x, y);
// //  img.resize(150, 100);
//
//   // check if the mouse is inside the bounding box and tickle if so
//   if (mouseIsPressed) {
//     x += random(-5, 5);
//     y += random(-5, 5);
//   }
  // var volume = input.getLevel();
  //
  // var threshold = 0.15;
  // fill(volume*100, volume*100, volume*200, volume*100);
  // if (volume > threshold) {
  //   ellipse(mouseX, mouseY, volume*300, volume*300);
  // } else if (volume > 0.08){
  //   rect(mouseX, mouseY, 100, 100);
  // }
  background(51);
  noStroke();
	var sec = second();
  //fill(255);
  if (sec%7==0){

    fill(random(0,255),random(0,255),random(0,255),random(0,255));
  }
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function drawSketch11() {
  // background(0);
  // unicorn1.move();
  // unicorn1.show();
  // unicorn2.move();
  // unicorn2.show();

  // https://p5js.org/examples/drawing-pulses.html
  noStroke();
  fill(0, 102);
  sec = second();
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle += 5;
    let val = cos(radians(angle)) * 12.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(mouseX/4+random(1, 10)*sec , mouseY / 2, random(1, 10)*sec, random(0, 255));
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255);
    ellipse(mouseX, mouseY, 2, 2);
  }

}

function draw() {

  if (window.selectedSketch === 1) {
    drawSketch1();
  } else if (window.selectedSketch === 2){
    drawSketch2();
  } else if (window.selectedSketch === 3){
    drawSketch3();
  } else if (window.selectedSketch === 4){
    drawSketch4();
  } else if (window.selectedSketch === 5){
    drawSketch5();
  } else if (window.selectedSketch === 6){
    drawSketch6();
  } else if (window.selectedSketch === 7){
    drawSketch7();
  } else if (window.selectedSketch === 8){
    drawSketch8();
  } else if (window.selectedSketch === 9){
    drawSketch9();
  } else if (window.selectedSketch === 10){
    drawSketch10();
  } else if (window.selectedSketch === 11){
    drawSketch11();
  } else {
    drawSketch1();
  }

}
