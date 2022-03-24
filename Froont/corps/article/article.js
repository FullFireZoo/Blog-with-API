const div = document.querySelector('.container')

fetch("http://localhost:3000/Articles")
  .then(response => response.json())
  .then(article => {
      
    for(i of article){
        console.log(i);
    bsd(div, i.titre, i.contenu)}

})
    

function bsd (selector, title,cont){
    selector.innerHTML += 
    `<div class="art1">
    <ul>
        <li>
            <h2>${title}</h2>
        </li>
        <li>
            <p>${cont}</p>
        </li>
    </ul>
    <div class="btn">
    <button>Modifier</button>
    <button>Supprimer</button>
    </div>
</div>`
}

