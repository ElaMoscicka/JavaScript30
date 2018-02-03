   // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

   const triggers = document.querySelectorAll('a'); //selecting all links
   const highlight = document.createElement('span'); // highlight
   highlight.classList.add('highlight'); //adding class of highlight
   document.body.appendChild(highlight); //putting it into the DOM

   //listen for someone enters into a link
   function highlightLink () {
    //how big is the element that we hovered and how and where on the page is that actual element
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };
  
   //applying the style
   highlight.style.width = `${coords.width}px`;
   highlight.style.height = `${coords.height}px`;
   highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

   //listen for mouse enter event on each of our triggers -> when that happens we're gonna run highlightLink function
   triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
