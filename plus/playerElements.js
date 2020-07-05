import { secondsToMinutes } from "./utils.js";

export default {
  get() {
    this.cover = document.querySelector(".card-image");
    this.title = document.querySelector(".card-content h5");
    this.artist = document.querySelector(".artist");
    this.playPause = document.querySelector("#play-pause");
    this.nextTrack = document.querySelector("#next-track");
    this.previousTrack = document.querySelector("#previous-track");
    this.volume = document.querySelector("#volume-icon");
    this.volumeControl = document.querySelector("#volume-control");
    this.seekbar = document.querySelector("#seekbar");
    this.currentDuration = document.querySelector("#current-duration");
    this.totalDuration = document.querySelector("#total-duration");
  },
  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  actions() {
    this.playPause.onclick = () => this.togglePlayPause();
    this.audio.onended = () => this.next();

    this.volume.onclick = () => this.toggleMute();
    this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
    this.volumeControl.onchange = () =>
      this.setVolume(this.volumeControl.value);

    this.seekbar.oninput = () => this.setSeekbar(this.seekbar.value);
    this.seekbar.onchange = () => this.setSeekbar(this.seekbar.value);

    this.seekbar.max = this.audio.duration;
    this.totalDuration.innerText = secondsToMinutes(this.audio.duration);

    this.audio.ontimeupdate = () => this.timeUpdate();

    this.nextTrack.onclick = () => this.next();
    this.previousTrack.onclick = () => this.back();
  },
};
