var isLines = false;
var isCircle = true;

function setup()  {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255, 255, 255);
  rectMode(CENTER);
}

function draw()  {
  background(255, 255, 255);
  if (mouseIsPressed == true)  {
    if (isCircle == true)  {
      isCircle = false;
    }
    else  {
      isCircle = true;
    }
    mouseIsPressed = false;
  }
  
  if (keyIsPressed == true)  {
    if (isLines == true)  {
      isLines = false;
    }
    else  {
      isLines = true;
    }
    keyIsPressed = false;
  }
  drawCircles();
}

function drawCircles()  {
  if (isLines == true)  {
    stroke(138, 203, 136, 80);
    for (var i = 0; i <= width; i += 50)  {
      for (var j = 0; j <= height; j += 50)  {
        if (isCircle == true)  {
          noFill();
          strokeWeight(4);
          ellipse(i, j, 35, 35);
        }
        else  {
          noFill();
          strokeWeight(4);
          rect(i, j, 35, 35);
        }
      }
    }
  } 
  else  {
    fill(100, 131, 129, 80);
    for (var i = 0; i <= width; i += 50)  {
      for (var j = 0; j <= height; j += 50)  {
        if (isCircle == true)  {
          noStroke();
          ellipse(i, j, 35, 35);
        }
        else  {
          noStroke();
          rect(i, j, 35, 35);
        }
      }
    }
  }
}