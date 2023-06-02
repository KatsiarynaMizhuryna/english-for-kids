import cards from '/src/js/cards.js';

console.log(cards)

// create cards for main page
function createCategories() {
    let categoriesContainer = document.querySelector(".categories__container");
    const mainPage = cards[0];
    mainPage.forEach(item => {
        categoriesContainer.innerHTML += `<div class="categories">         
                <img class="categories_image" src="${item.image}" alt ="${item.word}">            
                  <p class="categories_text">${item.word}</p>
           </div>`;
    })
}

createCategories()
export {createCategories}

// create cards for the selected category
function chooseCategory(categories) {
    let categoriesContainer = document.querySelector(".categories__container");
    const cardsElements = cards.slice(1, cards.length);
    //categories = Array.from(document.querySelectorAll(".categories"));
    categories.forEach((category, index) => {
        category.addEventListener('click', () => {
            categoriesContainer.innerHTML = '';
            cardsElements[index].forEach((el) => {
                categoriesContainer.innerHTML += `
<div class="categories_card">   
       <div class="card-front">
                <img class="categories_image" src="${el.image}" alt ="${el.word}"> 
                <div class = "categories_info"> 
                <audio src="${el.audioSrc}"></audio>               
                <a href="#"><img class="sound_icon" src="/src/images/icons/sound.png" alt="Sound"></a>
                 <p class="categories_text">${el.word}</p>                    
                 <a href="#"><img class="rotate_icon" src="/src/images/icons/arrow.png" alt="Arrow"></a>
       </div>    
       </div>
        <div class="card-back">
                 <img class="categories_image" src="${el.image}" alt ="${el.word}"> 
                 <p class="categories_text">${el.translation}</p>               
        </div>          
        </div>`

            })
            sayPronunciation();
            cardRotate();
        })
    })
}

chooseCategory(document.querySelectorAll(".categories"));
export {chooseCategory}

//create a function to pronounce a word
function sayPronunciation() {
    let sounds = document.querySelectorAll('.sound_icon');
    sounds.forEach(sound => {
        sound.addEventListener('click', () => {
            let play = sound.closest(".categories_card").querySelector("audio");
            const audio = new Audio();
            audio.src = play.getAttribute("src");
            audio.play();
        })
    })
}

//card rotation function
function cardRotate() {
    const rotateIcon = document.querySelectorAll(".rotate_icon");
    const turn = document.querySelectorAll(".categories_card");

    turn.forEach(card => {
        card.addEventListener("click", (event) => {
            rotateIcon.forEach(icon => {
                if (event.target === icon) {
                    card.classList.add("card-turn");
                }
            })
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("card-turn");
        });
    })

}

cardRotate()
export {sayPronunciation, cardRotate}

export function navigation() {
    let burgerIcon = document.querySelector(".menu_icon");
    let menuNavigation = document.querySelector(".menu__navigation");
    let navigationLinks = document.querySelectorAll(".navigation-link")
    navigationLinks.forEach(navigationLink => {
        navigationLink.addEventListener('click', () => {
            document.body.classList.toggle("lock");
            menuNavigation.classList.toggle("active");
            burgerIcon.classList.toggle("active");
            chooseCategory(navigationLinks, cards)
        })
    })
    let navigationMainPage = document.querySelector(".navigation-link-main");
    navigationMainPage.addEventListener('click', () => {
        document.querySelector(".categories__container").innerHTML = '';
        document.body.classList.toggle("lock");
        menuNavigation.classList.toggle("active");
        burgerIcon.classList.toggle("active");
        createCategories();
        chooseCategory(Array.from(document.querySelectorAll(".categories")), cards.slice(1, cards.length));
    })
}

navigation()
