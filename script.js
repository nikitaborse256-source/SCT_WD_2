// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

// Input Parsing
buttons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

// Equals (=) Button Logic
equals.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = 'Error';
  }
});

// Clear (C) Button
clear.addEventListener('click', () => {
  display.value = '';
});

// Keyboard Input Handling
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.=';
  if (allowedKeys.includes(e.key)) {
    if (e.key === '=') {
      equals.click();
    } else {
      display.value += e.key;
    }
  } else if (e.key === 'Enter') {
    equals.click();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key === 'Escape') {
    clear.click();
  }
});
