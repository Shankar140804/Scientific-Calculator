// Function to append characters to the display
function appendCharacter(character) {
    const display = document.getElementById("display");
    display.value += character;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to calculate square root
function calculateSquareRoot() {
    const display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value));
}

// Function to calculate square
function calculateSquare() {
    const display = document.getElementById("display");
    display.value = Math.pow(parseFloat(display.value), 2);
}

// Function to calculate power with user input
function calculatePower() {
    const display = document.getElementById("display");
    const base = parseFloat(display.value);
    const exponent = parseFloat(prompt("Enter the exponent:"));
    display.value = Math.pow(base, exponent);
}

// Function to calculate sine
function calculateSin() {
    const display = document.getElementById("display");
    display.value = Math.sin(parseFloat(display.value) * Math.PI / 180);
}

// Function to calculate cosine
function calculateCos() {
    const display = document.getElementById("display");
    display.value = Math.cos(parseFloat(display.value) * Math.PI / 180);
}

// Function to calculate tangent
function calculateTan() {
    const display = document.getElementById("display");
    display.value = Math.tan(parseFloat(display.value) * Math.PI / 180);
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;
    const validKeys = '0123456789+-*/().%';
    
    if (validKeys.includes(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

// Add event listener for keyboard events
document.addEventListener('keydown', handleKeyboardInput);
