let buttonTime = document.getElementsByClassName("buttonSelectionTime");
let inputTime = document.getElementById("pomodoroInput");
let buttonActionStart = document.getElementById("buttonSelectionStart");

let totalSeconds; // Declarar fora para uso global
let timer; // Variável para armazenar o intervalo

buttonActionStart.addEventListener("click", () => {
  const [minutes, seconds] = inputTime.value.split(":").map(Number);
  totalSeconds = minutes * 60 + seconds;

  // Iniciar o temporizador
  timer = setInterval(() => {
    totalSeconds--;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    inputTime.value = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    // Parar o temporizador ao chegar a 0
    if (totalSeconds <= 0) {
      clearInterval(timer);
    }
  }, 1000);
});
