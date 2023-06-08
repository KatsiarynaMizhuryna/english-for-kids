import cards from '/src/js/cards.js';
import {startReplayHandler} from '/src/js/game.js';


let correctAnswers = 0;
let wrongAnswers = 0;

// create cards for main page
export function createCategories() {
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
        category.addEventListener('click', (event) => {
            renderCategoryCards(event, event.currentTarget.id)
        })
    })
    if (switchBlock.classList.contains('active')) {
        startButton.classList.remove('active__button')
    }
}

export function renderCategoryCards(event, i) {
    const cardsElements = cards.slice(1);
    let categoriesContainer = document.querySelector(".categories__container");
    let switchBlock = document.querySelector(".switch");
    let startButton = document.querySelector(".start__button");
    //let categoryId = event.currentTarget.id;
    console.log(event.target.parentElement) // TODO: refactor in navigation
    let categoryName = event.currentTarget.querySelector(".categories_text") ?
        event.currentTarget.querySelector(".categories_text").innerText : event.currentTarget.innerText;

    categoriesContainer.innerHTML = '';
    categoriesContainer.setAttribute('category', categoryName);
    cardsElements[i].forEach((el, index) => {
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
    gameStart(startButton)
}

function gameStart(button) {
    button.addEventListener('click', () => {
        let categoriesInfo = document.querySelectorAll(".categories_info");
        categoriesInfo.forEach(cardInfo => cardInfo.classList.add("hidden"));
        button.innerHTML = '';
        button.classList.add("repeat")
        setTimeout(startReplayHandler, 1000);
    })
}


function cardOnClickHandler(event) {
    let switchBlock = document.querySelector(".switch");
    let selectedCard = event.target.closest(".categories_card");
    let stats = JSON.parse(localStorage.getItem('stats'));
    let keyWord = selectedCard.querySelector('.categories_text').innerText;
    let categoryName = selectedCard.parentElement.getAttribute('category');


    if (event.target.className === 'rotate_icon') {
        event.preventDefault();
        selectedCard.classList.add("card-turn");
        stats[categoryName][keyWord]['train'] += 1;
        localStorage.setItem('stats', JSON.stringify(stats));
        console.log(keyWord, categoryName)


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
                setTimeout(playSound, 1000, soundPath)
                playSound("/src/sounds/Result/correct.mp3")
                correct.innerHTML += `<img class="star" src="/src/images/icons/star.png" alt="correct star">`;
                correctAnswers += 1;

            } else {
                document.querySelector(".start__button").classList.remove('active__button', 'repeat');
                correct.innerHTML = '';
                wrong.innerHTML = '';
                setTimeout(gameResults, 1000, wrongAnswers);
            }

            stats[categoryName][keyWord]['hit'] += 1;
            localStorage.setItem('stats', JSON.stringify(stats));
        } else {
            let currentCard = document.querySelector('[is_current]').querySelector('.categories_text').innerText
            //categoryCards[curCardId].setAttribute("skip", "true");
            console.log('Wrong!');
            playSound("/src/sounds/Result/error.mp3");
            wrong.innerHTML += `<img class="star" src="/src/images/icons/star-wrong.png" alt="wrong star">`;
            wrongAnswers += 1;
            stats[categoryName][currentCard]['miss'] += 1;
            localStorage.setItem('stats', JSON.stringify(stats));
        }
    }

    console.log('Correct answers: ' + correctAnswers + '\nWrong answers: ' + wrongAnswers)
}


function initLocalStorage() {
    if (localStorage.getItem('stats') === null) {
        let stats = {};
        for (let [i, v] of cards[0].entries()) {
            stats[v.word] = {};
            for (let card of cards[i + 1]) {
                stats[v.word][card.word] = {'train': 0, 'hit': 0, 'miss': 0, 'translation': card.translation};
            }
        }
        localStorage.setItem('stats', JSON.stringify(stats));
    }
}

initLocalStorage();

//create a function to pronounce a word
export function sayPronunciation(selectedCard) {
    let play = selectedCard.querySelector("audio")
    const audio = new Audio();
    audio.src = play.getAttribute("src");
    audio.play();
}

//card rotation function
export function cardRotate(event) {
    const SelectedCard = event.target.closest(".categories_card");
    SelectedCard.classList.remove("card-turn");
}

export function navigation() {
    let burgerIcon = document.querySelector(".menu_icon");
    let menuNavigation = document.querySelector(".menu__navigation");
    let navigationLinks = document.querySelectorAll(".navigation-link")
    navigationLinks.forEach((navigationLink, index) => {
        navigationLink.addEventListener('click', event => {
            document.body.classList.toggle("lock");
            menuNavigation.classList.toggle("active");
            burgerIcon.classList.toggle("active");
            // console.log(navigationLink)
            // console.log(index)
            renderCategoryCards(event, index)
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
    let train = document.querySelector(".switch__round__train");
    let play = document.querySelector(".switch__round__play");
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
        switchBlock.classList.toggle('active');
        train.classList.toggle("text__hidden");
        play.classList.toggle("text__hidden");
        createCategories();
    }, 3000);
}
