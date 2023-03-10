function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;
const PROMPT_DELAY = 1000;
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyColor: document.querySelector('body')
} 

refs.startBtn.addEventListener('click', () => {
    refs.startBtn.disabled = true;
    timerId = setInterval(() => {
    let color = getRandomHexColor();
    refs.bodyColor.style.background = color;
    }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
    refs.startBtn.disabled = false;
    clearInterval(timerId);
});
