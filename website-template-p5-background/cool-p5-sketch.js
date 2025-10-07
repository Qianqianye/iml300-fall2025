function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0, 255, 0, 100);
    for (let col=0; col <= mouseX; col += 50) {
      for (let row=0; row <= height; row += 50) {  
        push();
        /* move the origin from (0,0) to the point of rotation (col,row)*/
        translate(col, row);
        rotate(frameCount * 0.02);
        rectMode(CENTER);
        rect(0,0,20,60);
        pop();     
      }
    }  
}