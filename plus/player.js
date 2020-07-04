import audios from "./data.js";
import { path, secondsToMinutes } from "./utils.js";
import elements from "./playerElements.js";

export default {
  audioData: audios,
  currentAudio: {},
  currentPlaying: 0,
  isPlaying: false,
  start() {
    elements.get.call(this);
    this.update();
    this.volumeControl.value = 100;
  },
  play() {
    this.isPlaying = true;
    this.audio.play();
    this.playPause.innerText = "pause";
  },
  pause() {
    this.isPlaying = false;
    this.audio.pause();
    this.playPause.innerText = "play_arrow";
  },
  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  },
  next() {
    ++this.currentPlaying;

    if (this.currentPlaying === this.audioData.length) {
      this.currentPlaying = 0;
    }
    this.pause();
    this.update();
    this.play();
  },
  back() {
    --this.currentPlaying;

    if (this.currentPlaying === -1) {
      this.currentPlaying = this.audioData.length - 1;
    }

    this.pause();
    this.update();
    this.play();
  },
  toggleMute() {
    this.audio.muted = !this.audio.muted;
    this.volume.innerHTML = this.audio.muted ? "volume_mute" : "volume_up";
  },
  setVolume(value) {
    this.audio.volume = value / 100;
  },
  setSeekbar(value) {
    this.audio.currentTime = value;
  },
  timeUpdate() {
    this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
    this.seekbar.value = this.audio.currentTime;
  },
  update() {
    this.currentAudio = this.audioData[this.currentPlaying];

    this.cover.style.background = `url('${path(
      this.currentAudio.cover
    )}') no-repeat center center / cover`;

    this.title.innerHTML = this.currentAudio.title;
    this.artist.innerHTML = this.currentAudio.artist;

    elements.createAudioElement.call(this, path(this.currentAudio.file));

    this.audio.onloadeddata = () => {
      elements.actions.call(this);
    };
  },
};
