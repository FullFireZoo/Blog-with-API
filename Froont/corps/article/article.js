const div = document.querySelector('.container')

fetch("http://localhost:3000/Articles")
  .then(response => response.text())
  .then(article => bsd())


