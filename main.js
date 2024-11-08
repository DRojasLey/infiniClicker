/**
 * DOM DECLARATIONS
 */

const light = document.querySelector('.the-light');
const brotherMoth1 = document.querySelector('.brother-moth'); // single querySelector
const score = document.querySelector('.score');
const scoreCont = document.querySelector('.score-cont');
const body = document.body; // Reference to the body element

function changeColor() {
    body.style.backgroundColor = '#ffffff'; // Set background color here
}

let clickCount = 0


light.addEventListener('click', () => {
    score.innerText = `${clickCount++}`
})