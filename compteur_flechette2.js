// Quand mon bouton submit Nom_envoyer sera cliqué alors ...
let formulaire2 = document.getElementById("formulaire2");
formulaire2.addEventListener("submit", function (event) {

    event.preventDefault();
    console.log("salut");
// Sélectionne le "Nom du joueur"
    let Nom_joueur = document.getElementById("Nom_joueur")
// Tu prends le "Nom du joueur"
    let Nom_joueur_value = Nom_joueur.value
// Tu vérifie qu'il à bien été séléctionné
    console.log(Nom_joueur_value);
// Créer une balise li
    let baliseLi2 =document.createElement("li")
// Ensuite on créer une div
    let newDiv = document.createElement("div")
// On lui attribut un nom "box_div2"
    newDiv.className = "box_div2";
// Mon titre h3 aura le "nom du joueur"
    let nomjoueur = document.createElement("h3")
// Mon titre h4 aura le score du joueur
    let scorejoueur = document.createElement("h4")

// Mon bouton qui ajoute la valeur 1 au score
let scorebutton_1 = document.createElement("button")
scorebutton_1.addEventListener("click", addScore);

// Mon bouton qui ajoute la valeur 2 au score
let scorebutton_2 = document.createElement("button")
scorebutton_2.addEventListener("click", addScore);
// Mon bouton qui ajoute la valeur 3 au score
let scorebutton_3 = document.createElement("button")
scorebutton_3.addEventListener("click", addScore);

// Voir le bouton des ajouts de scores 

function addScore (event) {
    // Séléctionne les bons éléments
    console.log('event', event)
    console.log("event",event.target.parentElement)
    const parent2 = event.target.parentElement
    // Séléction du titre h4 sous forme de texte
    let scoreSelectH4 = parent2.querySelector("h4")
    console.log("inputSelect2 - h4select",scoreSelectH4)

    // Convertit sous forme de chiffre
    console.log("scoreH4",parseInt(scoreSelectH4.innerHTML, 10))

    const valeur = parseInt(event.target.innerText);
    console.log("Ma valeur 1",valeur)
    console.log("Score final +1",parseInt(scoreSelectH4.innerHTML, 10) + valeur);
    
    scoreSelectH4.innerHTML = parseInt(scoreSelectH4.innerHTML, 10) + valeur;
    console.log("Résultat final valeur 1",scoreSelectH4)
    x = scoreSelectH4


    let result = document.createElement("p")
    result.textContent = "You Win !"    

    if ( x >= 21) {
    let youWin = document.querySelector(".test h6")
    youWin.appendChild(result)
    }
}

    // Mon button remove qui me permet de supprimer un joueur
    let buttonSupprimer = document.createElement("button")
    buttonSupprimer.addEventListener("click", function () {
        buttonSupprimer.parentElement.parentElement.remove();
    });

// On ajoute du texte dans les bonnes "variables"
    buttonSupprimer.textContent = "Remove";

    scorebutton_1.textContent = "+1";
    scorebutton_2.textContent = "+2";
    scorebutton_3.textContent = "+3";

    scorejoueur.textContent = "0";
    nomjoueur.textContent = Nom_joueur_value

 // On ajoute tous nos textes et nos buttons dans la div   
    newDiv.appendChild(buttonSupprimer)

    newDiv.appendChild(scorebutton_1)
    newDiv.appendChild(scorebutton_2)
    newDiv.appendChild(scorebutton_3)

    newDiv.appendChild(scorejoueur)
    newDiv.appendChild(nomjoueur)
    
    baliseLi2.appendChild(newDiv)

// On ajoute la div dans le body en dessous du h6
    let selecteur = document.querySelector(".cont_player2 ol")
    selecteur.appendChild(baliseLi2)
    console.log("Cela s'affiché")
// Supprimer le pseudo du champ tetxte
    Nom_joueur.value="";
    // document.getElementById("player_name").value="";
});