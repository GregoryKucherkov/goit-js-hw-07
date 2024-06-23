const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.children.length}`);

const items = document.querySelectorAll('.item ul');

items.forEach(element => {
  console.log(`Category: ${element.previousElementSibling.textContent}`);
  console.log(`Elements: ${element.children.length}`);
});
