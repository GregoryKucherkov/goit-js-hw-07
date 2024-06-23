function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// div block for boxes. Creating variable to access this block
const boxes = document.querySelector('#boxes');

// function for boxes creation
function createBoxes(amount) {
  boxes.innerHTML = ''; // reseting the existing blocks
  let size = 30; // initial size of blocks
  const divs = []; // variable for collecting blocks

  // cycle for box creation and inserting them to DOM
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
    size += 10;
  }
  boxes.append(...divs); // interacting with DOM once to append all elements
}

// function to destroy boxes
function destroyBoxes() {
  boxes.innerHTML = '';
}

// variable to access controls block with its parent
const page = document.querySelector('#controls');

// variables to access create and destroy buttons
const createBtn = document.querySelector('button[data-create]');
const destrBtn = document.querySelector('button[data-destroy]');

// function to handle input with accesing to input value
const handleCreate = event => {
  const amount = page.firstElementChild.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    console.log('The number is not valid! Choose a number between 1 and 100.');
  }
  page.firstElementChild.value = ''; //clearing the input
};

createBtn.addEventListener('click', handleCreate);
destrBtn.addEventListener('click', destroyBoxes);
