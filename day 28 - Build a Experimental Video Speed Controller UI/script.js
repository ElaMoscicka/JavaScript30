const speed = document.querySelector('.speed'); //selecting speed
const bar = document.querySelector('.speed-bar'); //selecting speed-bar (filled part of the bar)
const video = document.querySelector('.flex'); //video element

//when we hover over the bar it's gonna change the playback rate and update the actual visuals


speed.addEventListener('mousemove', function(e) {
    const y = e.pageY - this.offsetTop; //showing where we are when we hover over the bar
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%'; //turning it into percentage
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height; //styling the bar -> showing where we are when we hover over the bar
    bar.textContent = playbackRate.toFixed(2) + '×'; //update the number that is inside of the bar
    video.playbackRate = playbackRate; //applying value to the video
});

//Another way:
/*function handleMove(e) {
      const y = e.pageY - this.offsetTop;
      const percent = y / this.offsetHeight;
      const min = 0.4;
      const max = 4;
      const height = Math.round(percent * 100) + '%';
      const playbackRate = percent * (max - min) + min;
      bar.style.height = height;
      bar.textContent = playbackRate.toFixed(2) + '×';
      video.playbackRate = playbackRate;
    }
  speed.addEventListener('mousemove', handleMove);
  */
