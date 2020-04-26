module.exports = collection => {
  return collection.getFilteredByTag('writing').reverse();
};
