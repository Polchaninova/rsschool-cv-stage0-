const audio = document.querySelector(".audio");
const player = document.querySelector(".player");
const playPause = document.querySelector(".play-pause");
const playPrev = document.querySelector(".play-prev");
const playBtn = document.querySelector(".play");
const playNext = document.querySelector(".play-next");
const playList = document.querySelector(".play-list");
const songName = document.querySelector(".song_name");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const controlsTime = document.querySelector(".controls-time");
const currentTime = document.querySelector(".current-time");
const durationTime = document.querySelector(".duration");
const seekSlider = document.getElementById("seek-slider");
const volumeSlider = document.getElementById("volume-slider");
const outputContainer = document.getElementById("volume-output");

// name
export const songs = [
  "Aqua Caelestis",
  "Blue - Guilty",
  "Edvard Grieg - Morning Mood Prelude",
  "Edvard Grieg ",
  "Ennio Morricone - Le Vent, Le Cri ",
  "Ludwig Van Beethoven - Moonlight Sonata",
  "Panis Angelicus",
  "River Flows In You",
  "Summer Wind",
];

// songs по умолчанию

let songsIndex = 0;

// init
export function loadSong(song) {
  songName.innerHTML = song;
  audio.src = `assets/sounds/${song}.mp3`;
}
loadSong(songs[songsIndex]);

// play

export function playSong() {
  player.classList.add("play");
  playPause.classList.add("pause");

  audio.play();
}
function pauseSong() {
  player.classList.remove("play");
  playPause.classList.remove("pause");

  audio.pause();
}

playBtn.addEventListener("click", () => {
  const isPlaying = player.classList.contains("play");
  if (isPlaying) {
    pauseSong();
    // pause.style.backgroundImage = url("../assets/svg/pause.svg");
  } else {
    playSong();
  }
});
// next song

function nextSong() {
  songsIndex++;
  if (songsIndex > songs.length - 1) {
    songsIndex = 0;
  }
  loadSong(songs[songsIndex]);
  playSong();
}
playNext.addEventListener("click", nextSong);
// prev song
function prevSong() {
  songsIndex--;
  if (songsIndex < 0) {
    songsIndex = songs.length - 1;
  }
  loadSong(songs[songsIndex]);
  playSong();
}
playPrev.addEventListener("click", prevSong);

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

const displayDuration = () => {
  durationTime.textContent = calculateTime(audio.duration);
};

if (audio.readyState > 0) {
  displayDuration();
} else {
  audio.addEventListener("loadedmetadata", () => {
    displayDuration();
  });
}
let minutes = Math.floor(currentTime / 60);
let seconds = Math.floor(currentTime % 60);
if (audio.readyState > 0) {
  displayDuration();
} else {
  audio.addEventListener("loadedmetadata", () => {
    displayDuration();
  });
}
//  progress
function updateProgress(e) {
  const audio = e.srcElement;
  const { duration, currentTime: currentTime1 } = e.srcElement;
  const progressPercent = (currentTime1 / duration) * 100;

  progress.style.width = `${progressPercent}%`;
  let minutes = Math.floor(audio.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  let seconds = Math.floor(audio.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }
  currentTime.innerHTML = `${minutes}:${seconds}`;
}
audio.addEventListener("timeupdate", updateProgress);

// перемотка
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  console.log(width);
  console.log(clickX);

  audio.currentTime = (clickX / width) * duration;
}
progressContainer.addEventListener("click", setProgress);
// autoplay
audio.addEventListener("ended", nextSong);

// Регулятор гучності
volumeSlider.addEventListener("input", (e) => {
  const value = e.target.value;

  outputContainer.textContent = value;
  audio.volume = value / 100;
});
// Вимкнення звуку
const muteIconContainer = document.getElementById("mute-icon");
const offMuteIconContainer = document.querySelector("onmute-icon ");
muteIconContainer.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    muteIconContainer.classList.remove("muted");
  } else {
    audio.muted = true;
    muteIconContainer.classList.add("muted");
  }
});
