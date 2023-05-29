function openBurgerMenu(burgerIcon, menuNavigation) {
    burgerIcon = document.querySelector(".menu_icon");
    menuNavigation = document.querySelector(".menu__navigation");
    burgerIcon.addEventListener("click", () => {
        document.body.classList.toggle("lock");
        menuNavigation.classList.toggle("active");
        burgerIcon.classList.toggle("active");
        console.log('hello');
    });
}

openBurgerMenu(".menu_icon", ".menu__navigation");
export {openBurgerMenu};
