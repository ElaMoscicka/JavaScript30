//Steps:
//we're listening for a clink on each panel
//when someone clicks we're gonna open it
//that's gonna then in turn trigger css open
//when that finishes, then 2nd one (transitionend) will activates and that's where we're going to toggle open-active

//grabbing all the panels
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('hello');
    this.classList.toggle('open');
};

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');    
    }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //take each of the panels, loop over each one of them, listen for a clink on each one of them, run the toggle fuction when it is run  
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
