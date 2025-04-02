const menuItems = ["loebforsindet", "praktisk", "rute", "sponsorer", "Omsind", "tilmeld"]

const menuState = { isOpen: false };

function toggleMenu() { 
    const menu = document.querySelector(".menu");

    if (window.innerWidth <= 768) {
        menuState.isOpen = !menuState.isOpen;
        menu.style.display = menuState.isOpen ? "block" : "none";
    }
}

function generateMenu() {
        const menu = document.querySelector(".menu");
        menu.innerHTML ="";

    for(let i = 0; i < menuItems.length; i++) { 
        let menuItem = document.createElement("a");
        menuItem.textcontent = menuItems[i];
        menuItem.href = "#";
        menu.appendChild(menuItem);
    }
}

document.querySelector(".burger").addEventListener("click", toggleMenu);

generateMenu();