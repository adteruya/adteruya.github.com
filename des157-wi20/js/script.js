var colorList = new Array('#E4FDE1', '#8ACB88', '#648381', '#575761', '#FFBF46');
var size = new Array(30, 70, 120, 50, 110, 40, 60, 20, 100, 80, 90);
var move = new Array(10, 3, 7, 1, 6, 5, 2, 4, 8, 9, 11);
var location = new Array();
var mvmt = new Array();
var goBack = new Array(false, false, false, false, false, false, false, false, false, false, false);
var currColor = 0;
var yesLines = false;

function calcLoc()  {
  for (var i = 0; i < location.length; i++)  {
    location[i] = move[i] * mvmt[i];
    if (goBack[i] == true)  {
      mvmt[i] -= 1;
    } else  {
      mvmt[i] += 1;
    }
  }
}

function calcDist()  {
  for  (var i = 0; i < goBack.length; i++)  {
    if (location[i] > width)  {
      goBack[i] = true;
    }
    if (location[i] <= 0)  {
      goBack[i] = false;
    }
  }
}

function drawEllipse()  {
  ellipse(location[0], 0, size[0], size[0]);
  ellipse(location[1], 30, size[1], size[1]);
  ellipse(location[2], 70, size[2], size[2]);
  ellipse(location[3], 100, size[3], size[3]);
  ellipse(location[4], 140, size[4], size[4]);
  ellipse(location[5], 200, size[5], size[5]);
  ellipse(location[6], 250, size[6], size[6]);
  ellipse(location[7], 60, size[7], size[7]);
  ellipse(location[8], 90, size[8], size[8]);
  ellipse(location[9], 80, size[9], size[9]);
  ellipse(location[10], 220, size[10], size[10]);
}

function setup()  {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background('#FFFFFF');
  noStroke();
  fill(colorList[currColor], 80);
  frameRate();
  for (var i = 0; i < move.length; i++) {
    location.push(0);
    mvmt.push(0);
  }
}

function draw()  {
  background('#FFFFFF');
  
  /** Clicking mouse button will change color of animation **/
  if (mouseIsPressed == true)  {
    currColor++;
    if (currColor > 4)  {
      currColor = 0;
    }
    if (yesLines == true)  {
      noFill();
      stroke(colorList[currColor], 80);
      strokeWeight(4); 
    }
    if (yesLines == false)  {
      noStroke();
      fill(colorList[currColor], 80);
    }
    mouseIsPressed = false;
  }
  
  /** Pressing any key will change the style of the shapes to their outlines **/
  if (keyIsPressed == true)  {
    if (yesLines == false)  {
      noFill();
      stroke(colorList[currColor], 80);
      strokeWeight(4);
      yesLines = true;
    } 
    else  {
      noStroke();
      fill(colorList[currColor], 80);
      yesLines = false;
    }
    keyIsPressed = false;
  }

  calcLoc();
  drawEllipse();
  calcDist();
}