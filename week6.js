/*
    Paste the code for your week 3 exercise below.
*/

var hw, hh, mainColour;
let keyCount = 0;
let tSize = 32;

let myObj = {};
myObj.myProperty = "I am a property and a string";
console.log(myObj.myProperty);

let myString = "I am still a property and a string";
myObj.myProperty = myString;
console.log(myObj.myProperty);

let leSquare = {};
let keyLog = [];

function setup() {
  
    if( windowWidth > windowHeight ){
      createCanvas(windowHeight, windowHeight);
    }else{
      createCanvas(windowWidth, windowWidth);
    }
  
    rectMode(CENTER);
    colorMode(HSL, 360, 100, 100);
    mainColour = color(343, 86, 53);

    hw = width/2;
    hh = height/2;

    leSquare.x = hw;
    leSquare.y = hh/2;
    leSquare.size = 50;
    leSquare.fillColour = mainColour;
    leSquare.moveIncrement = 5;
}

function draw() {

    background(255);
    fill(0);
    
    // Changng background colour on keypress
    if( keyIsDown(UP_ARROW) ) {
        background(176, 58, 46);
    }
    if( keyIsDown(DOWN_ARROW) ) {
        background(221, 196, 15);
    }
    if( keyIsDown(LEFT_ARROW) ) {
        background(186, 100, 60);
    }
    if( keyIsDown(RIGHT_ARROW) ) {
        background(34, 153, 84);
    }

  
    textSize(tSize);
    text( "Key presses: " + keyCount, tSize, hh +(tSize));


    // Keylog text
    fill(leSquare.fillColour);

    let tempString = "";
    for(i=0; i<keyLog.length; i++){

        tempString += keyLog[i] + " ";
    }
    // Output for variable
  text( "Output: ", tSize, hh +(tSize * 2));  
  text(tempString, tSize, hh + (tSize * 3) );
    

  
    // Mouse values for ellipse position
    let xPos = map(mouseX, 0, width, 0, hw, true);
    let yPos = map(mouseY, 0, height, 0, hw, true);
    let ellipseColour = map(mouseX, 0, width, 0, 100, true);
    let ellipseSize = map(mouseY, 0, height, 200, 0, true);
   
    text(ellipseSize, hw,hh/3);
    fill(mainColour);
   
    text(ellipseColour, hw,hh/2);
    fill(ellipseColour);
  

    ellipse(mouseX, mouseY, ellipseSize);
}


// Keyboard input + log
function keyPressed() {

    keyCount ++;

    keyLog[keyLog.length] = key;

    return false;
}