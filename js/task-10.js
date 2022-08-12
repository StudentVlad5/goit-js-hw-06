const btnCreate = document.querySelector(`[data-create]`);
const btnDestroy = document.querySelector(`[data-destroy]`);
const inputNumberOfBlocks = document.querySelector(`input`);
const idBlock = document.querySelector(`#boxes`);

console.log(btnCreate, btnDestroy, inputNumberOfBlocks, idBlock)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

inputNumberOfBlocks.value = 0;
let numberOfBlocks = inputNumberOfBlocks.value;

btnCreate.addEventListener('click', ()=>createBlocks())
btnDestroy.addEventListener('click', ()=>destroyBoxes())

function createBlocks (numberOfBlocks) {
   numberOfBlocks = inputNumberOfBlocks.value;
  for (let i = 0; i < numberOfBlocks; i +=1) {
    let size = 30;
    let divElem =  document.createElement('div');
    divElem.classList.add('block');
    divElem.style.width = `${size + i * 10}px`;
    divElem.style.height = `${size + i * 10}px`;
    divElem.style.backgroundColor = `${getRandomHexColor()}`;
    idBlock.appendChild(divElem)
}
}

function destroyBoxes () {
  const z = document.querySelectorAll('.block');
z.forEach((key) => key.remove());
inputNumberOfBlocks.value = 0;
}
