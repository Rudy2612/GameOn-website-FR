import modalFactory from './factory/modal.js';


// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn"); // querySelector pour bouton mobile et desktop
const closeBtn = document.getElementById("close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById('form')


var modal = modalFactory()

// launch modal event listener
modalBtn.forEach((btn) => btn.addEventListener("click", () => modal.launchModal()));

// close modal event listener
closeBtn.addEventListener("click", () => modal.closeModal());




form.addEventListener('submit', function (e) {

    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var email = document.getElementById('email').value;
    var birthdate = document.getElementById('birthdate').value;
    var quantity = Number(document.getElementById('quantity').value);
    var locations = document.getElementsByName('location');
    var checkbox1 = document.getElementById('checkbox1').checked;
    var checkbox2 = document.getElementById('checkbox2').value;


    // Test recommandations champs du formulaire
    if (checkMinLength(first, 2))
        if (checkMinLength(last, 2))
            if (mailIsValid(email))
                if (checkMinLength(birthdate, 10))
                    if (checkMinLength(String(quantity), 1))
                        if (checkNodeIsChecked(locations))
                            if (checkbox1 === true) {
                                modal.closeModal()
                                document.getElementById('form-succes').style.display = "block"
                                setTimeout(() => {
                                    document.getElementById('form-succes').style.display = "none"
                                }, 4000)
                            }
    // return true; // Si formulaire bon, fin execution


    if (!checkMinLength(first, 2))
        writeError('error-first', "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
    if (!checkMinLength(last, 2))
        writeError('error-last', "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    if (!mailIsValid(email))
        writeError('error-email', "Veuillez entrer un email valide.")
    if (!checkMinLength(birthdate, 10))
        writeError('error-birthdate', "Veuillez entrer un une date de naissance.")
    if (!checkMinLength(String(quantity), 1))
        writeError('error-quantity', "Veuillez entrer le nombre de tournois auquel vous avez participé")
    if (!checkNodeIsChecked(locations))
        writeError('error-location', "Veuillez renseigner un tournois")
    if (checkbox1 === false)
        writeError('error-conditions', "Veuillez renseigner un tournois")


    // Si les champs ne suivent pas les recommandations, le questionnaire n'est pas envoyé
    e.preventDefault();

})


// -----
// FONCTIONS POUR VERIFIER LE FORMULAIRE
// -----


function mailIsValid(mail) {
    var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(mail);
}

function checkMinLength(string, length) {
    if (string.length >= length)
        return true;
    return false;
}

function checkNodeIsChecked(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked === true) {
            return true;
        }
    }
    return false;
}


function writeError(id, message) {
    document.getElementById(id).innerText = message
}





function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

