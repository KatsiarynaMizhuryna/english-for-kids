function showStatistic() {
    let storage = JSON.parse(localStorage.getItem('stats'));
    let numOfWord = 1;
    //let arrayOfCards = cards.slice(1);
    let statisticTable = document.querySelector('main');
    statisticTable.innerHTML = '';
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
    const headerRow = document.createElement("tr");

    headerRow.innerHTML = `
          <th class="tab-head">#</th>
          <th class="tab-head">Category</th>   
          <th class="tab-head">Word</th>       
          <th class="tab-head">Translation</th>
          <th class="tab-head">Correct</th>
          <th class="tab-head">Wrong</th>
          <th class="tab-head">Train</th>  
          <th class="tab-head">%</th> 
                  
`;
    for (let key in storage) {
        for (let word in storage[key]) {
            tableBody.innerHTML += `<tr class="tab">
          <td class="tab">${numOfWord++}</td>
          <td class="tab">${key}</td>
          <td class="tab">${word}</td>
          <td class="tab">${storage[key][word].translation}</td>
          <td class="tab">${storage[key][word].hit}</td>
          <td class="tab">${storage[key][word].miss}</td>
          <td class="tab">${storage[key][word].train}</td> 
          <td class="tab">0</td>         
      </tr>`
        }
    }

    tableBody.prepend(headerRow);
    table.append(tableBody);
    statisticTable.append(table);
}

export function linkToStatistic() {
    const statLink = document.querySelector('.navigation-statistic');
    statLink.addEventListener('click', () => {
        showStatistic()
        //remove menu
        document.body.classList.toggle("lock");
        document.querySelector(".menu__navigation").classList.toggle("active");
        document.querySelector(".menu_icon").classList.toggle("active");
        //
        showStatisticButton()
    })
}

//showStatisticButton

function showStatisticButton() {
    let header = document.querySelector('header')
    let headerChildElements = document.querySelectorAll('header > :not(:first-child)')
    headerChildElements.forEach((element) => {
        element.remove();
    });
    let statisticButtonsBlock = document.createElement("div")
    statisticButtonsBlock.className = 'statistic__buttons-block'
    let resetButton = document.createElement("button")
    resetButton.className = 'reset-button';
    resetButton.innerText = 'Reset statistic';
    let repeatDiffWord = document.createElement("button")
    repeatDiffWord.className = 'repeat_word-button';
    repeatDiffWord.innerText = 'Repeat difficult words';
    statisticButtonsBlock.append(resetButton, repeatDiffWord)
    header.append(statisticButtonsBlock)
}
