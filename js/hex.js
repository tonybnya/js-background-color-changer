// set an array to hold all characters for an Hexadecimal color
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// hold the color name
const color = document.querySelector(".color");
// hold the button
const btn = document.getElementById("btn");

// build a random hex color and change the background by it
btn.addEventListener("click", function() {
  // all hex colors begin by "#" followed by 6 characters
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hexColor[getRandomIndex()];
  }
  // change background color
  document.body.style.backgroundColor = randomColor;
  // change the color name to the container
  color.innerHTML = randomColor;
  // print the choosen color to the console
  console.log(randomColor);
});

// define a function to pick a random index in hexColor
function getRandomIndex() {
  return Math.floor(Math.random() * hexColor.length);
}
