// set an array of colors
const colors = ["green", "yellow", "gray", "red", "orange", "pink"];
// set the color name
const color = document.querySelector(".color");
// set the button
const btn = document.getElementById("btn");

// add an event on the button to pick a random color to colors and change the bg
btn.addEventListener("click", function() {
  // pick a random color to colors array
  let randomColor = colors[getRandomIndex()];
  // change the background color
  document.body.style.backgroundColor = randomColor;
  // set the right color to the span on the container
  color.innerHTML = randomColor;
});

// define a function to get a random index in colors
function getRandomIndex() {
  return Math.floor(Math.random() * colors.length);
}
