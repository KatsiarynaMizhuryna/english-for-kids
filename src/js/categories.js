import cards from '/src/js/cards.js';
import {startReplayHandler} from '/src/js/game.js';

console.log(cards)

let correctAnswers = 0;
let wrongAnswers = 0;

// create cards for main page
function createCategories() {
    let categoriesContainer = document.querySelector(".categories__container");
    let switchBlock = document.querySelector(".switch");
    let startButton = document.querySelector(".start__button");
    const mainPage = cards[0];

    mainPage.forEach(item => {
        categoriesContainer.innerHTML +=
            `<div id ="${item.id}" class="categories">         
                <img class="categories_image" src="${item.image}" alt ="${item.word}">            
                <p class="categories_text">${item.word}</p>
            </div>`;
    })
    let categories = document.querySelectorAll(".categories");
    categories.forEach((category) => {
        category.addEventListener('click', renderCategoryCards)
    })
    if (switchBlock.classList.contains('active')) {
        startButton.classList.remove('active__button')
    }
}

function renderCategoryCards(event) {  // TODO: generate based on app mode (train/play)
    const cardsElements = cards.slice(1, cards.length);
    let categoriesContainer = document.querySelector(".categories__container");
    let switchBlock = document.querySelector(".switch");
    let startButton = document.querySelector(".start__button");

    categoriesContainer.innerHTML = '';
    cardsElements[event.target.parentElement.id].forEach((el, index) => {
        categoriesContainer.innerHTML += `
            <div class="categories_card" id="${index}">
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
    
    // add event listener for cards
    let categoryCards = document.querySelectorAll(".categories_card")
    categoryCards.forEach(card => {
        card.addEventListener('click', cardOnClickHandler);
        card.addEventListener('mouseleave', cardRotate);
    })

    if (switchBlock.classList.contains('active')) {
        startButton.classList.add('active__button')
    }
    startButton.addEventListener('click', () => {
        let categoriesInfo = document.querySelectorAll(".categories_info");
        categoriesInfo.forEach(cardInfo => cardInfo.classList.add("hidden"));
        startButton.innerHTML = '';
        startButton.classList.add("repeat")
        setTimeout(startReplayHandler, 1000)//startReplayHandler();
    })
}


function cardOnClickHandler(event) {
    let switchBlock = document.querySelector(".switch");
    let selectedCard = event.target.closest(".categories_card")
    if (event.target.className === 'rotate_icon') {
        event.preventDefault();
        selectedCard.classList.add("card-turn");
    } else if (event.target.className === 'sound_icon') {
        event.preventDefault();
        sayPronunciation(selectedCard);
    } else if (switchBlock.classList.contains('active')) { // TODO: condition may need to change
        let selectedCardId = selectedCard.id
        let categoryCards = document.querySelectorAll(".categories_card")
        let categoryCardsArr = Array.from(categoryCards);
        const correct = document.querySelector('.correct');
        const wrong = document.querySelector('.wrong');


        let curCardId = categoryCardsArr.map(
            (card) => card.hasAttribute("is_current") ? card.getAttribute("id") : null
        ).filter(a => a).join('');

        console.log('Selected: ' + selectedCardId)
        console.log('Current: ' + curCardId)

        if (curCardId === selectedCardId) {
            categoryCardsArr[curCardId].setAttribute("skip", "true");
            categoryCardsArr[curCardId].removeAttribute("is_current");

            let categoryCardsFiltered = categoryCardsArr.filter(
                (card) => card.getAttribute("skip") !== "true");
            let cardFilteredIds = categoryCardsFiltered.map(
                (card) => card.getAttribute("id")
            );
            let nextCardId = Math.floor(Math.random() * categoryCardsArr.length);
            while (!cardFilteredIds.includes(nextCardId.toString()) &&
            cardFilteredIds.length !== 0) {
                nextCardId = Math.floor(Math.random() * categoryCardsArr.length);
            }
            if (cardFilteredIds.length > 0) {
                categoryCardsArr[nextCardId].setAttribute("is_current", "true");
                let soundPath = categoryCardsArr[nextCardId].querySelector('audio').getAttribute("src");
                setTimeout(playSound, 1000, soundPath)//playSound(soundPath)
                playSound("/src/sounds/Result/correct.mp3")
                correct.innerHTML += `<img class="star" src="/src/images/icons/star.png" alt="correct star">`;
                correctAnswers += 1;

            } else {
                document.querySelector(".start__button").classList.remove('active__button', 'repeat');
                correct.innerHTML = '';
                wrong.innerHTML = '';
                gameResults(wrongAnswers);
                console.log(correct)
            }
            console.log('Correct answer');
            console.log(cardFilteredIds);

        } else {
            //categoryCards[curCardId].setAttribute("skip", "true");
            console.log('Wrong!');
            playSound("/src/sounds/Result/error.mp3");
            wrong.innerHTML += `<img class="star" src="/src/images/icons/star-wrong.png" alt="wrong star">`;
            wrongAnswers += 1;
        }
    }

    console.log('Correct answers: ' + correctAnswers + '\nWrong answers: ' + wrongAnswers)
}

//create a function to pronounce a word
function sayPronunciation(selectedCard) {
    let play = selectedCard.querySelector("audio")
    const audio = new Audio();
    audio.src = play.getAttribute("src");
    audio.play();
}

//card rotation function
function cardRotate(event) {
    const SelectedCard = event.target.closest(".categories_card");
    SelectedCard.classList.remove("card-turn");
}

export function navigation() {
    let burgerIcon = document.querySelector(".menu_icon");
    let menuNavigation = document.querySelector(".menu__navigation");
    let navigationLinks = document.querySelectorAll(".navigation-link")
    navigationLinks.forEach(navigationLink => {
        navigationLink.addEventListener('click', event => {
            document.body.classList.toggle("lock");
            menuNavigation.classList.toggle("active");
            burgerIcon.classList.toggle("active");
            renderCategoryCards(event)
        })
    })
    let navigationMainPage = document.querySelector(".navigation-link-main");
    navigationMainPage.addEventListener('click', () => {
        document.querySelector(".categories__container").innerHTML = '';
        document.body.classList.toggle("lock");
        menuNavigation.classList.toggle("active");
        burgerIcon.classList.toggle("active");
        createCategories();
    })
}

function playSound(path) {
    let audio = new Audio(path);
    audio.play();
}

function gameResults(wrong) {
    let switchBlock = document.querySelector(".switch");
    let categoriesContainer = document.querySelector(".categories__container");
    categoriesContainer.innerHTML = '';

    if (wrong > 0) {
        playSound("/src/sounds/Result/failure.mp3")
        categoriesContainer.innerHTML = `
            <h2></h2>
            <img class="result_image" src="/src/images/result/failure.png" alt="failure">`;

    } else {
        playSound("/src/sounds/Result/success.mp3")
        categoriesContainer.innerHTML = '<img class="result_image" src="/src/images/result/success.png" alt="success">'
    }
    setTimeout(() => {
        categoriesContainer.innerHTML = '';
        switchBlock.classList.remove('active');      
        createCategories();
    }, 3000);
}


createCategories();
navigation();

export {createCategories}
export {renderCategoryCards}
export {sayPronunciation, cardRotate}
