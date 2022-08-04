import { Observer } from './observer';

const textField = document.querySelector('.textField');
const inputField = document.querySelector('.inputField');

const observer = new Observer();

observer.addListener((value) => {
  textField.innerHTML = value;
});

inputField.addEventListener('keyup', () => {
  observer.updateValue(inputField.value)
});
