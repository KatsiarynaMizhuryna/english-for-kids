//import {chooseCategory} from '/src/js/categories.js';
//import {createCategories} from '/src/js/categories.js';
import cards from '/src/js/cards.js';

//function to open the burger menu
function openBurgerMenu(burgerIcon, menuNavigation) {
    burgerIcon = document.querySelector(".menu_icon");
    menuNavigation = document.querySelector(".menu__navigation");
    burgerIcon.addEventListener("click",
        () => {
            document.body.classList.toggle("lock");
            menuNavigation.classList.toggle("active");
            burgerIcon.classList.toggle("active");
        });
}

openBurgerMenu(".menu_icon", ".menu__navigation");
export {openBurgerMenu};

//function to move through the navigation menu
