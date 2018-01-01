function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if it's not a transform
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selecting an audio element
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selecting the corresponding key
    if(!audio) return; //stop the function from running when there's no audio

    key.classList.add('playing');
    audio.currentTime = 0; //rewind to the start
    audio.play();
};

const keys = document.querySelectorAll('.key'); // or const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //each key gets an EventListener added to it('transitionend'), when transition is ended, we're removing it
window.addEventListener('keydown', playSound);
