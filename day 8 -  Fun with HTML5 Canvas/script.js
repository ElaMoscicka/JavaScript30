//grabbing canvas
const canvas = document.querySelector('#draw');

//grabbing context
const ctx = canvas.getContext('2d'); //asking for 2d context

//resizing canvas widht&height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; //color
ctx.lineJoin = 'round'; //rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments
ctx.lineCap = 'round'; //the ends of lines are rounded.
ctx.lineWidth =  100;
ctx.globalCompositeOperation = 'multiply'; //lines will blend each other as user will draw over top of each other

let isDrawing = false; //flag that will tell us should we actually draw to this canvas or someone is just moving their mouse without doing anything

//creating starting&ending point for a line (where do you start & end the line)
let lastX = 0;
let lastY = 0;

//HSL color
let hue = 0;

let direction = true;


//creating draw function, it will be called whenever person moves mouse on top of the canvas
function draw(e) {
    if (!isDrawing) return; // stop the function from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //hsl starting from red, 100% saturation, 50% lightness
    ctx.beginPath(); //start from 0
    ctx.moveTo(lastX, lastY); //go to wherever the user's mouse is actually moving
    ctx.lineTo(e.offsetX, e.offsetY); 
    ctx.stroke(); //calling stroke to see the line(s)

    [lastX, lastY] = [e.offsetX, e.offsetY];//once we're done with draw function, we wanna update lastX and lastY variables to be wherever they were
    
    //increment (changing color)
    hue++;
    if (hue >= 360) { //reset
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) { //if it's greater than 100 or less than 1->flip the direction
        direction = !direction; //flip the direction
    }

    //line width, depending on what the current direction is, we either increment the line width or decrement it
    if (direction) {
        ctx.lineWidth++; //if direction is true, line width goes up
    } else {
        ctx.lineWidth--; //otherwise the line width goes down
    }
}

//making sure we won't start drawing from 0, 0:
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; //updating lastX and lastY 
});

canvas.addEventListener('mousemove', draw); 
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
