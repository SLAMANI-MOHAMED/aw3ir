var nom = document.getElementById("fname").value;
var prenom = document.getElementById("lname").value;
var dateDeNaissance = document.getElementById("date").value;
var adresse = document.getElementById("text").value;
var mail = document.getElementById("email").value;


function ValiderFormulaire(nom,prenom,dateDeNaissance,adresse,mail){


    if((nom.length < 5) || (nom.length > 20)){
        document.getElementById("error").innerHTML = "La saisie de nom est obligatoire";
    }else if ((prenom.length < 5) || (prenom.length > 20)){
        document.getElementById("error").innerHTML = "La saisie de prenom est obligatoire";   
    }else if ((adresse.length < 5) || (adresse.length > 50)){
        document.getElementById("error").innerHTML = "La saisie d'adresse est obligatoire";
    }else if(validateEmail(email)){
        document.getElementById("error").innerHTML = "mail incorrecte";
    }else{

        document.getElementById("error").innerHTML = "Bienvenue" + document.querySelector("#nom").value;
    }

    
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}