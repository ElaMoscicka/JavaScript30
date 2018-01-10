//getting inputs
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked; //using let, as it will be reassigned constantly

function handleCheck(e) {
    // Check if they had the shift key down
  // AND check that they are checking it (not unchecking)
  let inBetween = false;
  if (e.shiftKey && this.checked) {
// go ahead and do what we please
// loop over every single checkbox
    checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
            console.log('Starting to check them inBetween!');
        }

        if (inBetween) {
            checkbox.checked = true;
        }
    });
  }
    
    lastChecked = this;
};


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)); //when user clicks it, it's gonna run function handleCheck
