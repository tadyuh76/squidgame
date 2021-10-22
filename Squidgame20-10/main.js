const audio = new Audio("SQsound.mp3");
audio.play()

const navigate = () => {
  const root = document.querySelector(".root");
  const room = document.querySelector(".room");
  root.style.display = "none";
  room.style.display = "block";
  audio.pause();
}