const secondHand = document.querySelector('.second-hand'); //seconds
const minsHand = document.querySelector('.min-hand'); //minutes
const hourHand = document.querySelector('.hour-hand'); //hour

//creating function setDate to make sure clock updates the seconds/minutes/hour
function setDate() {
    const now = new Date(); //grab the date

    //seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //minutes
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    //hour
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000); //making sure it runs every second

setDate();
