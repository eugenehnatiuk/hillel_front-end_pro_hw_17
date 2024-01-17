import { getInputName } from './inputModule.js';
import { updateOutputBox } from './outputModule.js';

const inputBox = document.querySelector('.input-box');
const btn = inputBox.querySelector('.input-box__btn');

const storedName = localStorage.getItem('name');

if (storedName) {
  inputBox.style.display = 'none';
  updateOutputBox(storedName);
}

btn.addEventListener('click', () => {
  let inputName = getInputName();

  if (inputName) {
    localStorage.setItem('name', inputName);
    inputBox.style.display = 'none';
    updateOutputBox(inputName);
  } else {
    alert('Enter your name');
  }
});
