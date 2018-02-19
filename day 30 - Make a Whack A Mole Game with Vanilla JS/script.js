const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

//time
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  //picking random hole for the mole to pop up
  //holes is a NodeList
  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length); //finding a random index between zero and five
    const hole = holes[idx]; //idx from 0 to 5
    if (hole == lastHole) {
        console.log('Ah nah thats the same one bud');
        return randomHole(holes);
    }
    lastHole = hole; //saving the reference to what one got popped last time randomHole function was called
    return hole;
}

//getting the moles popping up!
function peep() {
    const time = randomTime(200, 1000); //getting time
    const hole = randomHole(holes); //getting hole
    hole.classList.add('up'); //adding class up to a hole, it will animate using our css
    //after random amount of time, we need to remove the class of up from random hole
    setTimeout(() => {
        hole.classList.remove('up'); //removing class up from a hole
        if (!timeUp) peep(); //if timeUp == true, function will stop running
}, time);
}

function startGame() {
    scoreBoard.textContent = 0; //reseting the scoreBoard
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000); //setting timeUp variable to true after 10 seconds
}

function bonk(e) {
    if (! e.isTrusted) return; //cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score; //mole should go down after we hit him
}

moles.forEach(mole => mole.addEventListener('click', bonk)); //listening for a click on each of the moles and then running bonk function
