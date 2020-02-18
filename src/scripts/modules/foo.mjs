/**
 * Foo module
 */

// These are the imports...
import { compareAsc, compareDesc, format } from 'date-fns'; // Named imports
import { person, contact, dates } from './utils.mjs'; // Named imports

const helloFooA = () => {
  // Grouping the console logging
  console.groupCollapsed('Foo A Group');
  console.log('Hello from foo A.');

  /**
   * Date formatting etc.
   */
  const formatDates = format(new Date(2014, 1, 11), 'yyyy-MM-dd');
  console.log('Date has been formatted as...', formatDates);

  console.groupEnd();
};

const helloFooB = () => {
  // Grouping the console logging
  console.groupCollapsed('Foo B Group');
  console.log('Hello from foo B.');

  /**
   * Card object
   * Pulls data from utils.js module
   */
  const card = `
    <div class="card--extra">
      <h2>Title</h2>
      <p>Hello, my name is ${person.title} ${person.first} ${person.last} and I'm ${person.age} years old.</p>
      <ul>
        <li>${contact.street}</li>
        <li>${contact.city}</li>
        <li>${contact.county}</li>
        <li>${contact.zip}</li>
        <li>${contact.country}</li>
      </ul>
      <button class="close">Close x</button>
    </div>
  `;

  // Add the card element to the DOM
  document.body.insertAdjacentHTML('beforeend', card);

  // Selecting and adding another class to the card element
  const cardElem = document.querySelector('.card--extra');

  cardElem.classList.add('cardB');
  console.log('Card element is... ', cardElem);

  // Function that removes the card
  function cardRemove() {
    console.log('Goodbye card element');
    cardElem.remove();
  }

  // Select close button, add remove card element when clicked
  const buttonClose = document.querySelector('.close');

  if(buttonClose) {
    console.log('Found the close button!');
    buttonClose.addEventListener('click', cardRemove);
  } else {
    console.log('No close button found.');
  }

  /**
   * Date order sorting
   */
  // 1. Grab dates array (from utils.js) and sort in ascending order...
  const datesAscend = dates.sort(compareAsc);
  console.log('Dates have been sorted in ascending order...', datesAscend);

  // 2.Grab dates array (from utils.js) and sort in descending order...
  const datesDescend = dates.sort(compareDesc);
  console.log('Dates have been sorted in descending order...', datesDescend);

  console.groupEnd();
};

export { helloFooA, helloFooB };
