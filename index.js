// Handle Button Clicks

// Color array to allow color cycling
const colors = [
  "rgb(255, 38, 0)",   // red
  "rgb(0, 128, 255)",  // blue
  "rgb(0, 255, 115)",  // green
];
let colorIndex = 0;

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex += 1;

  // repeat array list cycle
  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const displayParagraph = document.getElementById('keyPressDisplay');
  if (displayParagraph) {
    displayParagraph.textContent = `Key pressed: ${event.key}`;
  }
} // im confused :( 
// edit: I had to change "Pressed" to "pressed" ...

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const inputField = document.getElementById('textInput');
  const displayParagraph = document.getElementById('textInputDisplay');
  
  if (inputField && displayParagraph) {
    displayParagraph.textContent = `You typed: ${inputField.value}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}