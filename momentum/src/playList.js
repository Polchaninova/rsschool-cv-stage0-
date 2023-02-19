import { loadSong, playSong, songs } from "./playAudio";
const playList = document.querySelector(".play-list");

export function renderPlaylist() {
  playList.innerHTML = songs
    .map(
      (songName) => `
    <li class="play-item " data-id="${songName}">${songName}</li>
    `
    )
    .join("");
}
playList.addEventListener("click", onPlaylistClick);
function onPlaylistClick(e) {
  const id = e.target.dataset["id"];
  if (id) {
    loadSong(id);
    playSong();
    activeSong(id);
  }
}
function activeSong(id) {
  [...playList.children].forEach((element) => {
    if (id === element.dataset["id"]) {
      element.classList.add("item-active");
    } else {
      element.classList.remove("item-active");
    }
  });
}
