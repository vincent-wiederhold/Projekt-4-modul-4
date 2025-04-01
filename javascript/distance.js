const distancer = ["3 km", "5 km", "10 km"];
let alleDistancer = "";

for (let i = 0; i < distancer.length; i++) {
    alleDistancer += '<input type="radio" name="distance" value="' + distancer[i] + '">' + '<label for="' + distancer[i] + '">' + distancer[i] + '</label>';
}

document.getElementById("distance").innerHTML = alleDistancer;