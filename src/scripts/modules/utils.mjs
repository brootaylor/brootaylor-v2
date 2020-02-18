/**
 * Utilities JS module
 * A bunch of reusable variables / methods etc.
 */

// These are the imports...
import faker from 'faker'; // Pulls in loads of fake data (node module)

/**
 * Person details object
 */
const person = {
  title: `${faker.name.prefix()}`,
  first: `${faker.name.firstName()}`,
  last: `${faker.name.lastName()}`,
  age: `${faker.random.number() - 1972}`,
};

/**
 * Contact details object
 */
const contact = {
  street: `${faker.address.streetName()}`,
  city: `${faker.address.city()}`,
  county: `${faker.address.county()}`,
  zip: `${faker.address.zipCode()}`,
  country: `${faker.address.country()}`,
};

/**
 * Date array
 */
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10)
];

export { person, contact, dates };
