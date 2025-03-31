const menuItems = [
    { name: 'Home', link: 'index.html' },
    { name: 'About', link: 'about.html' },
    { name: 'Services', link: 'services.html' },
    { name: 'Contact', link: 'contact.html' }
];

// Get the menu container
const menuContainer = document.getElementById('card');

// Loop through the menu items and create links using a for loop
for (let i = 0; i < menuItems.length; i++) {
    menuContainer.innerHTML += '<li><a href="' + menuItems[i].link + '">' + menuItems[i].name + '</a></li>';
}