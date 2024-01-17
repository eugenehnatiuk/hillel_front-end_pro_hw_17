export { updateOutputBox };

function createOutputMessage(className, name) {
  const outputName = document.createElement('p');
  outputName.classList.add(className);
  outputName.innerText = `${name}!`;

  return outputName;
}

function updateOutputBox(text) {
  const outputBox = document.querySelector('.output-box');
  const content = createOutputMessage('output-box__name', text);
  outputBox.appendChild(content);
  outputBox.style.display = 'flex';
}
