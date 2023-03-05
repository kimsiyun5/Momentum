const currentTime = document.querySelector("#currentTime strong");

function setTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  currentTime.innerText = `${hours}:${minutes}:${seconds}`;
}

setTime();
setInterval(setTime, 1000);