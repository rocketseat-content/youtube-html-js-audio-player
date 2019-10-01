function secondsToMinutes(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
}
const path = function(file) {
  return `files/${file}`;
};

export { path, secondsToMinutes };
