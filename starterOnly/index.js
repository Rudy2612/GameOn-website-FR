import modalFactory from './factory/modal.js';


// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn"); // querySelector pour bouton mobile et desktop
const closeBtn = document.getElementById("close");
const formData = document.querySelectorAll(".formData");


var modal = modalFactory()

// launch modal event listener
modalBtn.forEach((btn) => btn.addEventListener("click", () => modal.launchModal()));

// close modal event listener
closeBtn.addEventListener("click", () => modal.closeModal());







function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}






// form

// Function appelée après la validation du formulaire
function validate() {
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var email = document.getElementById('email').value;
    var birthdate = document.getElementById('birthdate').value;
    var quantity = document.getElementById('quantity').value;
    quantity = Number(quantity);
    var locations = document.getElementsByName('location');
    var checkbox1 = document.getElementById('checkbox1').checked;
    var checkbox2 = document.getElementById('checkbox2').value;

    var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    var locactionCheck = false
    var locationName = false
    locations.forEach((e) => {
        if (e.checked) {
            locactionCheck = true;
            locationName = e.value;
        }
    })


    // Si prenom a 2 caractères ou plus
    if (first.length >= 2) {
        // Si nom a 2 caractères ou plus
        if (last.length >= 2) {
            // Si Le format de l'email est valide
            if (regexEmail.test(email)) {
                // Si la quantité est bien une valeur numérique
                if (typeof quantity == "number") {
                    // Si une location a été cochée
                    if (locactionCheck === true) {
                        // Si les conditions générales sont cochés
                        if (checkbox1 === true) {
                            // Toute les validations sont passés
                            return true;
                        }
                        else {
                            return false
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }

}

