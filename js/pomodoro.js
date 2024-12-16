let inputTime = document.getElementById("pomodoroInput");
let buttonActionStart = document.getElementById("buttonSelectionStart");
let buttonActionPause = document.getElementById("buttonSelectionPause");
let buttonActionRestart = document.getElementById("buttonSelectionRestart");

let buttonPomodoro = document.getElementById("buttonSelectionPomodoro");

let buttonPomodoroShort = document.getElementById("buttonSelectionShort");

let buttonPomodoroLong = document.getElementById("buttonSelectionLong");

let totalSeconds; // Declarar fora para uso global
let timer; // Variável para armazenar o intervalo
let initialSeconds;

buttonActionStart.addEventListener("click", () => {
  const [minutes, seconds] = inputTime.value.split(":").map(Number);
  totalSeconds = minutes * 60 + seconds;
  initialSeconds = totalSeconds;

  // Iniciar o temporizador
  timer = setInterval(() => {
    totalSeconds--;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    //Adiciona espaçamento e zeros na formatação dos valores do cronometro
    inputTime.value = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    //Desabilita o usuário de interagir com o input enquanto estiver rodando o cronometro
    inputTime.disabled = true;

    // Parar o temporizador ao chegar a 0
    if (totalSeconds <= 0) {
      clearInterval(timer);
    }
  }, 1000);
});

//Pausa o cronometro
buttonActionPause.addEventListener("click", () => {
  clearInterval(timer);
});

//Para o cronometro, adiciona o valor inicial do input a ele novamente formatado em minutoes e segundos
buttonActionRestart.addEventListener("click", () => {
  clearInterval(timer);
  totalSeconds = initialSeconds;
  inputTime.value = `${String(Math.floor(initialSeconds / 60)).padStart(
    2,
    "0"
  )}:${String(initialSeconds % 60).padStart(2, "0")}`;
});

buttonPomodoro.addEventListener("click", () => {
  clearInterval(timer);
  inputTime.value = "25:00";
  inputSeconds = 25 * 60;
});

buttonPomodoroShort.addEventListener("click", () => {
  clearInterval(timer);
  inputTime.value = "05:00";
  inputSeconds = 5 * 60;
});

buttonPomodoroLong.addEventListener("click", () => {
  clearInterval(timer);
  inputTime.value = "40:00";
  inputSeconds = 40 * 60;
});
