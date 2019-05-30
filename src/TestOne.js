export const sortObjectsById = (arrayOfObjects) => {
  const clone = arrayOfObjects.slice();

  return clone.sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;

    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
};
