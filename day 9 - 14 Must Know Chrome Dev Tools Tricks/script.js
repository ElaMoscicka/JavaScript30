    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() { //take 1st paragraph on the page and make it green & 50px size
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    //Elements-> right click on the element-> Break on... -> attribute modifications

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', '💩'); //interpolate whatever you've passed as a second thing, into the first one (in the place of '%s')

    // Styled text with %c
    console.log('%c I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue')

    // warning!
    console.warn('Oh Nooooo!'); //display a warning in the console

    // Error :|
    console.error('Oups, error!'); //display an error in the console

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing if the things are true (throwing an error in the console if it is false)
    console.assert(1 === 1, 'That is wrong!'); //you won't see anything if you run this, as it's true
    console.assert(1 === 2, 'That is wrong!');

    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    console.clear(); //clear your console :)

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    console.clear();

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting how many times you used specific word/number/object/etc
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // timing if you wanna see how long something takes
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

      console.table(dogs);
