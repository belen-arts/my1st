function setup() {
  createCanvas(400, 400); // Create a 400x400 pixel canvas
}

function draw() {
  background(220); // Set background color to light gray

  fill(0, 102, 255); // Set fill color for the circle (blue)
  stroke(0); // Set the outline color (black)
  strokeWeight(2); // Set the thickness of the outline

  ellipse(200, 200, 100, 100); // Draw a circle at (200, 200) with a diameter of 100
  print("Hello, ANITA!"); // Print "Hello, World!" to the console
}
