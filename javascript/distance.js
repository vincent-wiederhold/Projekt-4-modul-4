const distancer = ["3 km", "5 km", "10 km"];
let alleDistancer = "";

//Hvis variablen alleDistancer er tom, så skal den udskrive distancerne
if (!alleDistancer) {

    for (let i = 0; i < distancer.length; i++) {
        alleDistancer += '<input type="radio" name="distance" value="' + distancer[i] + '">' + '<label for="' + distancer[i] + '">' + distancer[i] + '</label>';
    }

    document.getElementById("distance").innerHTML = alleDistancer;
}

// Hvis variablen alleDistancer ikke er tom, så skal den kalde funktionen alertFunction
else {
    alertFunction();
}

// Funktionen skriver i consolen, at der er en fejl
function alertFunction() {
    console.log("Distancer er der ikke!")
}

