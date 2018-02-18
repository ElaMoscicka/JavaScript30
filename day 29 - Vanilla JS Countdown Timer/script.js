let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]'); //selecting everything with data-time attribute

function timer (seconds) {
    // clear any existing timers
  clearInterval(countdown);
  
 const now = Date.now(); //current time
 const then = now + seconds * 1000 //number of seconds which you wish to run the timer, now is in milliseconds, so we have to multiply it by 1000
 displayTimeLeft(seconds); //running it immediately 
 displayEndTime(then);

 //displaying amount of time each second
 countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); 
    //check if we should stop it
    if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
    }
    //display it
    displayTimeLeft(secondsLeft);
 }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`; //if remainderSeconds less than 10-> return 0, otherwise return nothing
    document.title = display //updating the title tag from our HTML to display
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
  }
  
  buttons.forEach(button => button.addEventListener('click', startTimer));
  document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
  });
