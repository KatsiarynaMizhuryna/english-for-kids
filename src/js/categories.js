import cards from '/src/js/cards.js';

function createCategories() {
    let categoriesContainer = document.querySelector(".categories__container");
    const mainPage = cards[0];
    mainPage.forEach(item => {
        categoriesContainer.innerHTML += `<div class="categories_card">         
                <img class="categories_image" src="${item.image}" alt ="${item.text}">            
                  <p class="categories_text">${item.text}</p>
           </div>`;
    })
}

createCategories()
export {createCategories}

function chooseCategory() {
    let categoriesContainer = document.querySelector(".categories__container");
    const categories = Array.from(document.querySelectorAll(".categories_card"));
    const cardsElements = cards.slice(1, cards.length);
    categories.forEach((category, index) => {
        category.addEventListener('click', () => {
            categoriesContainer.innerHTML = '';
            cardsElements[index].forEach((el) => {
                categoriesContainer.innerHTML += `<div class="categories_card">         
                <img class="categories_image" src="${el.image}" alt ="${el.word}"> 
                <div class = "categories_info">
                <a href="#"><img class="sound_icon" src="/src/images/icons/sound.png" alt="Sound">
                <audio src="${el.audioSrc}"></audio>
                </a>
                    <p class="categories_text">${el.word}</p>                    
                    <a href="#"><img class="rotate_icon" src="/src/images/icons/turn-left.png" alt="Arrow">                    
                    </a>
                    </div>          
                </div>`
            })
        })
    })  
}

chooseCategory();
export {chooseCategory}



