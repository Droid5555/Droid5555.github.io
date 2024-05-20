const countdown = document.querySelector(".countdown__text");

function Counter() {
  let milliseconds = new Date("2024-06-26T12:30:00") - new Date();

  let seconds = Math.floor((milliseconds / 1000) % 60);
  let minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

  countdown.textContent = `Дней:${days} Часов:${hours} Минут:${minutes} Секунд:${seconds}`;
}

setInterval(function () {
  Counter();
}, 1000)
