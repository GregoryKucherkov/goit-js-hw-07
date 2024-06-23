const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onFieldInput = event => {
  const newValue = inputEl.value.trim();
  if (newValue !== '') {
    outputEl.textContent = newValue;
  } else {
    outputEl.textContent = 'Anonymous';
  }
};

inputEl.addEventListener('input', onFieldInput);
