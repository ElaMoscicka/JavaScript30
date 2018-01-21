const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200; //200px

function shadow(e) {
    //get the width&height of the thing that we have hovered over (hero)
    const { offsetWidth: width, offsetHeight: height } = hero;
    //another way:
    //const width = hero.offsetWidth;
    //const height= hero.offsetHeight;

    //get the info where the person's cursor was
    let { offsetX: x, offsetY : y } = e;

    //this will be always a div with a class of hero, e.target will sometimes change
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    //how far should the text shadow go
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    
    //styling text shadow
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7), 
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener('mousemove', shadow); //when the mouse is moved, we gonna run the shadow function
