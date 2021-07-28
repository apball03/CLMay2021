
// Finding navigation buttons
const menuButton = document.getElementById('ham-container');
const navMenu = document.getElementById('nav-menu');

// Perform actions on click event
// menuButton.addEventListener("click", showNavMenuOnClick);

menuButton.addEventListener('click', showNavMenuOnClick());
//  This is menu prep/crap
// function showNavMenuOnClick() {
//     if(!navMenu.style.display) { // equal to (navMenu.style.display === '')
//         navMenu.style.display = 'flex'
//     } else {
//         navMenu.style.display = '';
//     }
// }
function showNavMenuOnClick() {
    if(!navMenu.style.display) { // equal to (navMenu.style.display === '')
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = '';
    }
}

function myFunction(x) {
    x.classList.toggle("change");
  }