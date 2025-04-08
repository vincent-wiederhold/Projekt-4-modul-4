const distancer = ["3 km", "5 km", "10 km"];
let alleDistancer = "";

//Hvis variablen distancer har indhold, så skal den udskrive de pågældende distancer ind i et inputfelt, som bliver injektet ind på hjemmesiden
if (distancer.length > 0) {

    for (let i = 0; i < distancer.length; i++) {
        alleDistancer += '<input type="radio" name="distance" value="' + distancer[i] + '">' + '<label for="' + distancer[i] + '">' + distancer[i] + '</label>';
    }

    document.getElementById("distance").innerHTML = alleDistancer;
}

// Hvis variablen distancer ikke har indhold, så kaldes funktionen alertFunction
else {
    alertFunction();
}

// Funktionen skriver i consolen, at der ikke er nogen distancer
function alertFunction() {
    console.log("Der findes ingen distancer!")
}

