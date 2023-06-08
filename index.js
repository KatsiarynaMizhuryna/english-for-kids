import cards from './src/js/cards.js';
import {createCategories, navigation, renderCategoryCards, sayPronunciation, cardRotate} from './src/js/categories.js';
import {startReplayHandler} from './src/js/game.js';
import {openBurgerMenu} from './src/js/navigation.js';
import {createSwitchButton} from './src/js/switchButton.js';
import {linkToStatistic} from './src/js/statistics.js';

createCategories();
navigation();
linkToStatistic()
createSwitchButton();


