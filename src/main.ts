import "./style.css";

const mainPlayer = document.getElementById("main-player") as HTMLVideoElement;
const controls = document.querySelector(".controls") as HTMLDivElement;

const btnPlay = document.getElementById("btn-play") as HTMLButtonElement;
const btnNext = document.getElementById("btn-next") as HTMLButtonElement;
const btnPre = document.getElementById("btn-pre") as HTMLButtonElement;

let sourceIndex: number = 0;

let paused = false;

const sources = ["./videos/1.mp4", "./videos/2.mp4"];

function next() {
  if (sourceIndex + 1 >= sources.length) sourceIndex = 0;
  else sourceIndex += 1;
  mainPlayer.src = sources[sourceIndex];
}

function previous() {
  if (sourceIndex - 1 < 0) sourceIndex = sources.length - 1;
  else sourceIndex -= 1;
  mainPlayer.src = sources[sourceIndex];
}

btnPlay.addEventListener("click", () => {
  paused = false;
  mainPlayer.classList.toggle("paused", paused);
  controls.classList.toggle("hidden", !paused);
  mainPlayer.play();
});

btnNext.addEventListener("click", next);
btnPre.addEventListener("click", previous);

mainPlayer.addEventListener("click", () => {
  mainPlayer.pause();
  paused = true;
  mainPlayer.classList.toggle("paused", paused);
  controls.classList.toggle("hidden", !paused);
});

mainPlayer.addEventListener("ended", () => {
  next();
  mainPlayer.play();
});
