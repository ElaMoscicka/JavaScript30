const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//using regular expression to replace a, the, an with nothing (delete it from the beginning)
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

//sorting bands
const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);
    //Another way:
//const sortedBands = bands.sort(function(a, b) {
    //if (strip(a) > strip(b)) {
        //return 1;
    //} else {
        //return -1;
    //}
//});

document.querySelector('#bands').innerHTML = 
sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);
