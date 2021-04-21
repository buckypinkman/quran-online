export const addToLocal = (data, dataName) => {
  const parsed = JSON.stringify(data);
  window.localStorage.setItem(dataName, parsed);
}
