import modalFactory from './factory/modal.js';


// Élement du dom
const modalBtn = document.querySelectorAll(".modal-btn"); // querySelector pour bouton mobile et desktop
const closeBtn = document.getElementById("close");
const form = document.getElementById('form');
const modalBody = document.getElementById("modal-body")

// Appel de la fonction modal (factory method)
var modal = modalFactory();

// launch modal event listener
modalBtn.forEach((btn) => btn.addEventListener("click", () => modal.launchModal()));

// close modal event listener
closeBtn.addEventListener("click", () => modal.closeModal());



// Form submit event listener
form.addEventListener('submit', function (e) {

    // Stop le comportement par defaut du formulaire pour effectuer le traitement
    e.preventDefault();


    // Valeurs des éléments du formulaire pour les vérifications
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var email = document.getElementById('email').value;
    var birthdate = document.getElementById('birthdate').value;
    var quantity = Number(document.getElementById('quantity').value); // => La quantité doit être une valeur numérique
    var locations = document.getElementsByName('location');
    var checkbox1 = document.getElementById('checkbox1').checked;
    var checkbox2 = document.getElementById('checkbox2').value;


    // # Test recommandations champs du formulaire
    if (checkMinLength(first, 2)) // => Le nom doit avoir un minimum de 2 caractères
        if (checkMinLength(last, 2)) // => Le prenom doit avoir un minimum de 2 caractères
            if (mailIsValid(email)) // => L'email doit être renseigné dans le bon format
                if (checkMinLength(birthdate, 10)) // => La date de naissance doit être correctement renseigné, 10 caractères
                    if (checkMinLength(String(quantity), 1)) // => L'utilisateur doit obligatoirement renseigné un nombre de concours déjà participé
                        if (checkNodeIsChecked(locations)) // => L'utilisateur doit avoir coché les conditions d'utilisation
                            if (checkbox1 === true) {
                                // Si le formulaire a été correctement renseigné 

                                // Suppression total du formulaire dans le modal
                                form.remove()

                                // Création d'un message de confirmation
                                var successTag = document.createElement('p')
                                successTag.innerText = "Merci pour votre inscription"
                                successTag.classList.add('modal-success')
                                // Ajout sur le modal
                                modalBody.appendChild(successTag)

                                // Création d'un bouton pour fermer le modal en dessous de la confirmation
                                var closeModalButtonSucces = document.createElement('input')
                                closeModalButtonSucces.value = "Fermer"
                                closeModalButtonSucces.type = "submit"
                                closeModalButtonSucces.classList.add('btn-submit', 'button')
                                closeModalButtonSucces.onclick = () => modal.closeModal()
                                // Ajout sur le modal
                                modalBody.appendChild(closeModalButtonSucces)

                            }

    // Éxécuté après le check du formulaire
    // Si un élément de convient pas, afficher un message d'erreur
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

})


// -----
// FONCTIONS POUR VERIFIER LE FORMULAIRE
// -----


// Vérifier un email via un regex
function mailIsValid(mail) {
    var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(mail);
}

// Vérifier la longueur d'une chaine
function checkMinLength(string, length) {
    if (string.length >= length)
        return true;
    return false;
}

// Vérifier sur un ensemble de nodes en paramètres, si l'une d'entre elle est cochée
function checkNodeIsChecked(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked === true) {
            return true;
        }
    }
    return false;
}

// Fonction innerText
function writeError(id, message) {
    document.getElementById(id).innerText = message
}



// Event listener pour ouvrir le menu en mode responsive
var iconMenu = document.getElementById('iconMenu')

iconMenu.addEventListener('click', editNav)

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

