const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

//changing from NodeList into an Array of actual time strings
const seconds = timeNodes //from an array of list items
    .map(node => node.dataset.time) //into an array of strings
    .map(timeCode => { //turning it into seconds
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
        console.log(mins, secs);
    })
    .reduce((total, vidSeconds) => total + vidSeconds); //total number of seconds for every single video added together

    //getting total hours, minutes, seconds of all videos
    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(hours, mins, secondsLeft);
