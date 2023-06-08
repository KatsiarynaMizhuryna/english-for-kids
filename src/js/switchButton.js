export function createSwitchButton() {
    let switchBlock = document.querySelector(".switch");

    switchBlock.addEventListener("click", function () {
        let startButton = document.querySelector(".start__button");
        let train = document.querySelector(".switch__round__train");
        let play = document.querySelector(".switch__round__play");
        let categoriesInfo = document.querySelectorAll(".categories_info")

        this.classList.toggle("active");
        train.classList.toggle("text__hidden");
        play.classList.toggle("text__hidden");

        if (document.querySelector(".categories_card")) {
            if (switchBlock.classList.contains('active')) {
                startButton.classList.add('active__button');
            } else {
                startButton.classList.remove('active__button');
                categoriesInfo.forEach(cardInfo => cardInfo.classList.remove("hidden"))
            }
        }
    });
}
