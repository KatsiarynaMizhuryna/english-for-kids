export function startReplayHandler() {

    let categoryCards = Array.from(document.querySelectorAll(".categories_card"));
    let cardIds = categoryCards.map(card => card.getAttribute("id"));
    let curCardId = categoryCards.map(
        (card) => card.hasAttribute("is_current") ? card.getAttribute("id") : null
    ).filter(a => a).join('');

    if (curCardId) {
        let soundPath = categoryCards[curCardId].querySelector('audio').getAttribute('src');
        let audio = new Audio(soundPath);
        audio.play();

    } else {
        curCardId = Math.floor(Math.random() * cardIds.length);
        categoryCards[curCardId].setAttribute('is_current', 'true');
        let soundPath = categoryCards[curCardId].querySelector('audio').getAttribute('src');
        let audio = new Audio(soundPath);
        audio.play();
    }
}





