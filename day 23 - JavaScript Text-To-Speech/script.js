const msg = new SpeechSynthesisUtterance(); //what is person going to say (how fast did they say it, what is the pitch, voice that thy say it in, text that will be saying)
let voices = []; //empty array for voices
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak'); //start to speak
const stopButton = document.querySelector('#stop'); //stop
msg.text = document.querySelector('[name="text"]').value;


function populateVoices() {
    voices = this.getVoices(); //overwriting voices array
    voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en')) // showing only english voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`) //all of the voices 
    .join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value); //loop over every single voices in the array and find the one where it's name attribute is the same as the option that was currently selected
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel(); //cancel everything that is currently speaking
    //restart speaking
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices); // populate all the different voices, taking global variable speechSynthesis
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
