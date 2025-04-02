const cardItems = [
    { brødtekst: 'Pris:149.kr, Dato & tid 2. august kl. 10, Sted Odense, Engen', h1: 'Pratiske informationer' },
    { brødtekst: 'T-shirt, goodiebag, frisk luft og bevægelse', h1: 'Du får' },
];

const cardContainer = document.getElementById('card');
if (cardContainer < 0 ) {
    fejliCardsLoading();
} else {
console.log ("virker dette?")
    for (let i = 1; i < cardItems.length; i++) {
        cardContainer.innerHTML += '<li><h1 class="cardheader">' + cardItems[i].h1 + '</h1><p class="cardbrødtekst">' + cardItems[i].brødtekst + '</p></li>';
    }
}
//nu hvor variablen i = 1, bliver kun nr array { brødtekst: 'T-shirt, goodiebag, frisk luft og bevægelse', h1: 'Du får' }, udskrevet
function fejliCardsLoading(){
    console.log ("test af cards")
}