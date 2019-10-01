const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
  title:
    "Como começei a programar / Por que criamos a Rocketseat / Nossa Stack",
  artist: "Diego Fernandes",
  cover: "files/como-comecei.jpg",
  file: "files/como-comecei.mp3"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.file;
