const btn = document.querySelector('.valider');
const titre = document.querySelector('#title');
const contenu = document.querySelector('#contenu');

console.log(btn, titre, contenu);

function postfetch (title, content){

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
  "titre": title,
  "contenu": content,
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/Articles", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
};

btn.addEventListener("click", () => {
  titre.value
  contenu.value
  console.log(titre.value );
  console.log(contenu.value);
  postfetch (titre.value, contenu.value)
})
