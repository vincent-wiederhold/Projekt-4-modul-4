const cardItems = [
    { brødtekst: 'Pris:149.kr, Dato & tid 2. august kl. 10, Sted Odense, Engen', h1: 'Pratiske informationer' },
    { brødtekst: 'T-shirt, goodiebag, frisk luft og bevægelse', h1: 'Du får' },
];



if (cardItems.length = 0 ) {
    fejliCardsLoading();
} else {
console.log ("virker dette?")

    const cardContainer = document.getElementById('card');

    for (let i = 0; i < cardItems.length; i++) 
        {
        cardContainer.innerHTML += '<li><h1 class="cardheader">' + cardItems[i].h1 + '</h1><p class="cardbrødtekst">' + cardItems[i].brødtekst + '</p></li>';
    }
}

function fejliCardsLoading(){
    console.log ("test af cards")
}