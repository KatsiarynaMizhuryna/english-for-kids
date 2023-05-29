function createSwitchButton(switchBlock, train, play) {
    switchBlock = document.querySelector(".switch");
    console.log(switchBlock);
    train = document.querySelector(".switch__round__train");
    play = document.querySelector(".switch__round__play");

    switchBlock.addEventListener("click", function () {
        this.classList.toggle("active");
        train.classList.toggle("text__hidden");
        play.classList.toggle("text__hidden");
    });
}

createSwitchButton(".switch", ".switch__round__train", ".switch__round__play");
export {createSwitchButton};