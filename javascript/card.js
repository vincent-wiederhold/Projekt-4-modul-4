const cardItems = [
    { brødtekst: 'Pris:149.kr, Dato & tid 2. august kl. 10, Sted Odense, Engen', h1: 'Pratiske informationer' },
    { brødtekst: 'T-shirt, goodiebag, frisk luft og bevægelse', h1: 'Du får' },
];

if (cardItems.length < 0 ) {
    fejlicardsLoading();
} else {

    const cardContainer = document.getElementById('card');

    for (let i = 0; i < cardItems.length; i++) 
        {
        cardContainer.innerHTML += '<li><h1 class="cardheader">' + cardItems[i].h1 + '</h1><p class="cardbrødtekst">' + cardItems[i].brødtekst + '</p></li>';
    }

    console.log ("loading af cards velykket")
}

function fejlicardsLoading(){
    console.log ("Loading af cards fejlet")
}