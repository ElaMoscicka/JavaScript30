const arrow = document.querySelector('.arrow'); //selecting an arrow
const speed = document.querySelector('.speed-value'); //selecting km/h

//listening for users position
navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed; //updating data
    arrow.style.transform = `rotate(${data.coords.heading}deg)`; //rotate our compass/arrow depending on where we are
}, (err) => {
  console.error(err); //console.log the error
  alert('Hey, you gotta allow that to happen!');
});
