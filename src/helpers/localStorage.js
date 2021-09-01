export function getLocalStorage(key) {
  const item = JSON.parse(localStorage.getItem(key)) 
  return item
};

export function setLocalStorage(key, value) {
  const stringfyValue = JSON.stringify(value)
  localStorage.setItem(key, stringfyValue)
}