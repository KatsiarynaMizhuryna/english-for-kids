import cards from '/src/js/cards.js';


function createCategories() {
    const categoriesContainer = document.querySelector(".categories__container");
    const mainPage = cards[0];
    mainPage.forEach(item => {
        categoriesContainer.innerHTML += `<div class="categories_card">         
                <img class="categories_image" src="${item.image}" alt ="${item.text}">
                <div class="categories_info">
                    <a href="#"><img class="sound_icon" src="/src/images/icons/sound.png" alt="Sound"></a>
                    <span>${item.text}</span>
                    <audio src="/src/sounds/angry.mp3"></audio>
                    <a href="#"><img class="rotate_icon" src="/src/images/icons/turn-left.png" alt="Arrow"></a>
                </div>
            </div>`;
        //categoriesContainer.append(item);
    })
}

createCategories()
export {createCategories}
