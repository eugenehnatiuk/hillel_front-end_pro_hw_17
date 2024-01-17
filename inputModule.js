export { getInputName };

function getInputName() {
  return document.querySelector('input[type="text"]').value.trim();
}
