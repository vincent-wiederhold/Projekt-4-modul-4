
const menuItems = [
    { name: "Løb for SINDet", link: "#loebforsindet"},
    { name: "Praktisk", link: "#praktisk"},
    { name: "Rute", link: "#rute"},
    { name: "Sponsorer", link: "#sponsorer"},
    { name: "Om SIND", link: "https://sind.dk/om-sind"},
    { name: "Tilmelding", link: "#tilmelding"}
];

const menuState = { isOpen: false};

function toggleMobileMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block"){
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}

function generateMenu() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}">${item.name}</a>`;
        menu.appendChild(li);
    }
}

generateMenu();


function reportWindowSize() {
    if(window.innerWidth > 600) {
        menu.style.display = "none";
    }
}

window.onresize = reportWindowSize; /*Lånt kode fra: https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event*/


window.addEventListener('click', function(klik) {
    if (!this.document.getElementById('mobile-toggle').contains(klik.target) && (!this.document.getElementById('menu').contains(klik.target))) {
        this.document.getElementById('menu').style.display = "none";
    }
})
