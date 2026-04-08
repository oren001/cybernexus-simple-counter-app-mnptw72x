```javascript
let count = 0;

const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
  counterDisplay.textContent = count;
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

updateDisplay();
```