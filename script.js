let seconds = 0
let timer
const display = document.getElementById('display')
const startStopButton = document.getElementById('start-stop')
const resetButton = document.getElementById('reset')

startStopButton.onclick = () => {
  if (startStopButton.innerText === 'スタート') {
    timer = setInterval(addSecond, 1000)
    startStopButton.innerText = 'ストップ'
  } else {
    clearInterval(timer)
    startStopButton.innerText = 'スタート'
  }
}

const addSecond = () => {
  ++seconds

  display.innerText = seconds
}

resetButton.onclick = () => {
  display.innerText = seconds = 0
  clearInterval(timer)
  startStopButton.innerText = 'スタート'
}
