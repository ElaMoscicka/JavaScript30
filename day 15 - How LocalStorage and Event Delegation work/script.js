const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; //try to get from localStorage, if it isn't there, it's going to fall back to an empty array 

function addItem(e){
    e.preventDefault(); //stop the page from reloading
    const text = (this.querySelector('[name=item]')).value; //getting the input - looking inside of the form tag for something that has a name attribute of item
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items)); //convert your objects and arrays into a JSON string equivalent
    this.reset(); //clear the input - this. is the form element and form elemenths have a method called reset
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => { //loop over every single item in our array and we're gonna map (a map will take in an array of 'raw' data and return and array of some other data)
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
        `;
    }).join(''); //takes an array that map makes and turns it into one big string
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done; //change the property
    localStorage.setItem('items', JSON.stringify(items)); //store changed property in localStorage
    populateList(items, itemsList); //visually update what's on our page
}

addItems.addEventListener('submit', addItem); //listening for a submit event (when someone hits enter, when someone clicks a button & more)
itemsList.addEventListener('click', toggleDone); //listen for a click on the unordered list(itemsList)

populateList(items, itemsList);
