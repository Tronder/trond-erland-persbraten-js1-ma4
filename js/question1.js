const error = document.querySelector('.error');
const button = document.querySelector('button');
const text = document.querySelector('input');

button.onclick = function () {
  event.preventDefault();
  const checkTrimmed = text.value.trim();

  if (checkTrimmed.length < 5) {
    error.style.display = 'inline';
  } else {
    error.style.display = 'none';
  }
};
