module.exports = collection => {
  return collection.getFilteredByTag('links').reverse();
};
