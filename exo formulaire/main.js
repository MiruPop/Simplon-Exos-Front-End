let js = "JAVASCRIPT";

let test = document.getElementsByName;

let prenom = document.getElementById('prenom');
let nom = document.getElementById('nom');
let age = document.getElementById('age');
let ville = document.getElementById('ville');
let choix = document.getElementById('choix');
let check = document.getElementById('check');
let btn = document.getElementById('btn');
let myRadio = document.querySelector('#radio1');
let mySelect = document.querySelector('select');
let modal = document.getElementById('modal');

btn.addEventListener("click", event=>{
    event.preventDefault();
    console.log(prenom.value.trim());       //trim: pour eviter des erreurs genre un espace mis devant/derrierre la chaine de caracteres
    console.log(nom.value.trim());
    console.log(Number(age.value));
    console.log(mySelect.options[mySelect.selectedIndex].text);
    console.log(mySelect.selectedIndex);
    console.log(check.checked);
    console.log(myRadio.checked);

    if (prenom.value.trim()=="" || nom.value.trim()=="" ||
    age.value.trim()=="" || ville.value.trim()=="" ||
    Number(mySelect.selectedIndex) === 0) {
        alert ("Faut remplir tous les champs!")
    }
    else
    {
        if(check.checked)
        {
            // alert
            // (`
            //     Hello ${prenom.value} ${nom.value}
            //     tu es ${myRadio.checked?"un":"une"} ${myRadio.checked?"homme":"femme"},
            //     tu as ${age.value} ans,
            //     tu habites ${ville.value},
            //     ton formateur préféré est ${mySelect.options[mySelect.selectedIndex].text}
            //     et tu aimes ${js} ;) COOOL!
            //     `)

            //création d'un élément, avec "if" pour éviter les erreurs d'envoi de formulaire vide (si la div dans html a ou pas au moins un éspace):

            // if(modal.firstChild !== null) {
            //     modal.firstChild.remove();

            //     let node = document.createElement("p");
            // // création d'un <p></p>
            // let textnode = document.createTextNode(`
            // Hello ${prenom.value} ${nom.value}
            // tu es ${myRadio.checked?"un":"une"} ${myRadio.checked?"homme":"femme"},
            // tu as ${age.value} ans,
            // tu habites ${ville.value},
            // ton formateur préféré est ${mySelect.options[mySelect.selectedIndex].text}
            // et tu aimes ${js} ;) COOOL!`);
            // //Lorem
            // node.appendChild(textnode)

            // //<p>Lorem</p>
            // modal.appendChild(node);
            // }
            // else {
            // let node = document.createElement("p");
            // // création d'un <p></p>
            // let textnode = document.createTextNode(`
            // Hello ${prenom.value} ${nom.value}
            // tu es ${myRadio.checked?"un":"une"} ${myRadio.checked?"homme":"femme"},
            // tu as ${age.value} ans,
            // tu habites ${ville.value},
            // ton formateur préféré est ${mySelect.options[mySelect.selectedIndex].text}
            // et tu aimes ${js} ;) COOOL!`);
            // //Lorem
            // node.appendChild(textnode)

            // //<p>Lorem</p>
            // modal.appendChild(node);

            //avec inner HTML:

            if(modal.firstChild !== null) {
                modal.firstChild.remove();
                
                modal.innerHTML = `
                Hello <strong> ${prenom.value} ${nom.value}</strong> !\n
                Tu es ${myRadio.checked?"un":"une"} ${myRadio.checked?"homme":"femme"},
                tu as ${age.value} ans et
                tu habites ${ville.value}.
                Ton formateur préféré est ${mySelect.options[mySelect.selectedIndex].text}
                et tu aimes ${js} ;) <br>COOOL!`
            }
            else {
                modal.innerHTML = `
                Hello <strong> ${prenom.value} ${nom.value}</strong> !<br>
                Tu es ${myRadio.checked?"un":"une"} ${myRadio.checked?"homme":"femme"},
                tu as ${age.value} ans et tu habites ${ville.value}. 
                Ton formateur préféré est ${mySelect.options[mySelect.selectedIndex].text}
                et tu aimes ${js} ;) <br>COOOL!`
            }
        }
        
        else{
            alert(`TU N'AIMES PAS ${js} ??? WATCH YOUR BACK !!!`)
        }
    }
});
// console.log(btn);
