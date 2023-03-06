export function setupCounter(element) {
  let counterPlus = 0
  const setCounterup = (count) => {
    counterPlus = count
    element.innerText = `count is ${counterPlus}`
  }
  element.addEventListener('click', () => setCounterup(counterPlus + 1))
  setCounterup(0);

  let counterMinus = 0
  const setCounter = (count) => {
    counterMinus = count
    element.innerText = `count is ${counterMinus}`
  }
  element.addEventListener('click', () => setCounter(counterMinus - 1))
  setCounter(0)
}
