window.addEventListener("keydown", playSound);

function playSound(e) {
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`),
    audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

  if (!key) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".keys");

keys.forEach((key) => key.addEventListener("transitionend", transitionEnd));

function transitionEnd(e) {
  const transitionName = e.propertyName;
  if (transitionName !== "transform") return;
  e.target.classList.remove("playing");
}
