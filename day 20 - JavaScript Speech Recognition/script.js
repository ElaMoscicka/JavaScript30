window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //global variable

const recognition = new SpeechRecognition();
recognition.interimResults = true; //enables us to see what we're saying as we're speaking

let p = document.createElement('p'); //creating new paragraph
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    //converting into string
    const transcript = Array.from(e.results) 
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        p.textContent = transcript; //creating another paragraph
        if (e.results[0].isFinal) {
            p.document.createElement('p');
            words.appendChild(p);
        }

        if (transcript.includes('get the weather')) {
            console.log('Getting the weather');
        }
    console.log(transcript);
});

recognition.addEventListener('end', recognition.start); //when it ends (break), run the function recognition again

recognition.start();
