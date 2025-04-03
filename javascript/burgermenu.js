const menuItems = [
    { name: "Loebforsindet", link: "#Loebforsindet"},
    { name: "Praktisk", link: "#praktisk"},
    { name: "Rute", link: "#rute"},
    { name: "Sponsorer", link: "#sponsorer"}
];

const menuState = { isOpen: false };

function generateMenu() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";

    for (let i = 0; i < menuItems.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = menuItems[i].link;
        a.textContent = menuItems[i].name;

        a.addEventListener("click", () => {
            closeMenu();
        });
        
        li.appendChild(a);
        menu.appendChild(li);
    }
}

function toggleMenu(){
    const menu = document.getElementById("menu");

    if (menuState.isOpen) {
        menu.classList.remove("active");
    }
    else {
        menu.classList.add("active");
    }

    menuState.isOpen = !menuState.isOpen;
}

function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.remove("active");
    menuState.isOpen = false;
}
