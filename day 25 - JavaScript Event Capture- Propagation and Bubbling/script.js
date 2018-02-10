const divs = document.querySelectorAll('div'); //selecting all divs
const button = document.querySelector('button'); //selecting button

function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); // stop bubbling! you'll see only 1 value: one, two or three
    //console.log(this);
}

//when user clicks a div, we're going to log it
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, //running from three to one
    //capture: true, //running from one to three
    once: true, //listen for a click and then unbind itself so there's no future clicks on it
}));

button.addEventListener('click', () => {
    console.log('Click!');
}, {
    once:true,
});
