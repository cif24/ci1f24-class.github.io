// Step 1: Set up our p5 document to the size of our browser window
function setup() {
    createCanvas(windowWidth, windowHeight);
}
  
// Step 2: Make document dynamically resize to the size of browser window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Step 3: create a variable for input 
// this says- first, make our circle magenta purple 
let circleBgcolor = {r: 255, g: 0, b:255};
  
// Step 4: give our circle a random color when this function is called 
function circleColor() {
    circleBgcolor.r = random(0, 255);
    circleBgcolor.g = random(0, 255);
    circleBgcolor.b = random(0, 255);
}
  
// Step 5: use our variable to draw
// Our varible doesn't have an outline stroke
// it's color is filled with a random color from function above
// it's shaped like a ellipse that's 90x20px and follows the path of the mouse
// now, you can see our work in Step 3 on the page, because we're 'drawing' on the canvas
// but- it's not making anything a random color - yet
function draw() {
    noStroke();
    fill(circleBgcolor.r,circleBgcolor.g,circleBgcolor.b);
    ellipse(mouseX, mouseY, 90, 20);
}

// Step 6: when the mouse is pressed, this function that 'clears' the previous circle color 
// and creates a new, random color with the function that we set in Step 4 above
function mousePressed() {
    clear();
    circleColor();
}

