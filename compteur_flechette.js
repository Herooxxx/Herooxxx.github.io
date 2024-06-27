var nbClick=0;
var nbClickMax=100;
function compter()
{
  nbClick++;
  if(nbClick>=nbClickMax)
     {
         document.getElementById('input_ajouter').disabled=true;
         alert('Too many players added');
     }
}

let formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", function (event) {

    event.preventDefault();

    let player_name = document.getElementById("player_name")
    let player_name_value = player_name.value
    console.log(player_name_value);
    let baliseLi =document.createElement("li")
    let nouvelleDiv = document.createElement("div")
    nouvelleDiv.className = "box_player";
    let nouveauPseudo = document.createElement("h3")

    let score = document.createElement("h4")
    let scoreInput = document.createElement("input")
    scoreInput.type = "number"
    
    let scoreButton = document.createElement("button")
    scoreButton.addEventListener("click", function (event) {

        console.log("event",event.target.parentElement)
        const parent = event.target.parentElement
        const inputSelect = parent.querySelector("input")
        console.log("inputSelect",inputSelect)
        let scoreH4 = parent.querySelector("h4");
        console.log("scoreH4",parseInt(scoreH4.innerHTML, 10))
        console.log("inputSelect",parseInt(inputSelect.value, 10))
        console.log("Score final",parseInt(scoreH4.innerHTML, 10)-parseInt(inputSelect.value, 10))

        scoreH4.innerHTML = parseInt(scoreH4.innerHTML, 10)-parseInt(inputSelect.value, 10)
        console.log("Scorefinal",scoreH4)

        scoreInput.value="";

    });

    let buttonRemove = document.createElement("button")
    buttonRemove.addEventListener("click", function () {
        buttonRemove.parentElement.parentElement.remove();
    });

    nouveauPseudo.textContent = player_name_value
    score.textContent = "501";
    scoreButton.textContent = "Send score";
    buttonRemove.textContent = "Remove";

    nouvelleDiv.appendChild(buttonRemove)
    nouvelleDiv.appendChild(scoreInput)
    nouvelleDiv.appendChild(scoreButton)
    nouvelleDiv.appendChild(score)
    nouvelleDiv.appendChild(nouveauPseudo)
    baliseLi.appendChild(nouvelleDiv)

    let pp_input_add = document.querySelector(".cont_player ol")
    pp_input_add.appendChild(baliseLi)
    console.log("Le Pseudo bien affiché")

    player_name.value="";
});
