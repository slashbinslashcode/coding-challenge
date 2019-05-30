export const generateSortingMemoization = (sortByFunction) => {
  const cache = new Map();

  return (arg) => {
    if (cache.has(arg)) {
      return cache.get(arg);
    } else {
      cache.set(arg, sortByFunction(arg));
      return cache.get(arg);
    }
  };
};
