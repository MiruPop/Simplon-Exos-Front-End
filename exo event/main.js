let test = document.getElementById("test");
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
  
//au survol de la souris, les couleurs des 4 divs changent
test.addEventListener("mouseover", event => {
    event.target.style.background = "black";
//   réinitialisation de la couleur après un temps
  setTimeout(function() {
    event.target.style.background = "";
  }, 300);
});

//en appuyant sur div1, ça affiche un texte dans div4 (autant de fois que de clicks)
div1.addEventListener('click', event =>{
    let titre = document.createElement("h2");
    let afficheTitre = document.createTextNode(`
            ça roule ?`);
    titre.appendChild(afficheTitre)
    div4.appendChild(titre);
});
//en appuyant sur div2, ça affiche une image
div2.addEventListener('click', event => {
    if(div2.firstChild !== null) {
        div2.firstChild.remove();
        let image = document.createElement('img');
        image.setAttribute('src', "./boum.png");
        div2.appendChild(image)
    }
    else {
        let image = document.createElement('img');
        image.setAttribute('src', "./boum.png");
        div2.appendChild(image)
    }
})

//en appuyant sur div3, ça affiche un message, en effaçant ce qu'il y avait avant
div3.addEventListener('click', event =>{
    if(div3.firstChild !== null) {
        div3.firstChild.remove();
        let unTexte = document.createElement("h2");
        let afficheTexte = document.createTextNode(`
            J'AI DIT PAS TOUCHE!!!`);
        unTexte.appendChild(afficheTexte)
        div3.appendChild(unTexte);
    }
    else {
        let unTexte = document.createElement("h3");
        let afficheTexte = document.createTextNode(`
            J'AI DIT PAS TOUCHE!!!`);
        titre.appendChild(afficheTexte)
        div3.appendChild(unTexte);
    }
});