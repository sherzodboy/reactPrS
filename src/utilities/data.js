const searchHandler = (arr, term) => {
  if (term === 0) {
    return arr;
  }

  return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
};

const filterHandler = (arr, filter) => {
  switch (filter) {
    case "popular":
      return arr.filter((c) => c.like);
    case "mostViewrs":
      return arr.filter((c) => c.viewers > 1000);
    default:
      return arr;
  }
};

export { searchHandler, filterHandler };
