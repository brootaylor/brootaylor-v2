module.exports = collection => {
  return collection.getFilteredByTag('notes').reverse();
};
