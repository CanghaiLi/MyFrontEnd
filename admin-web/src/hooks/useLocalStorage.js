function useLocalStorage() {
  function setLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data))
  }
  function getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name))
  }
  return {
    setLocalStorage,
    getLocalStorage,
  }
}

export { useLocalStorage }
