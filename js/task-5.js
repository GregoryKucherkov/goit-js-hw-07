function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChange = document.querySelector('.change-color');
const backColor = document.querySelector('.color');

const handleColor = event => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  backColor.textContent = randomColor;
};

colorChange.addEventListener('click', handleColor);
