let inputTime = document.getElementById("pomodoroInput");
let buttonActionStart = document.getElementById("buttonSelectionStart");
let buttonActionPause = document.getElementById("buttonSelectionPause");
let buttonActionRestart = document.getElementById("buttonSelectionRestart");
let buttonPomodoro = document.getElementById("buttonSelectionPomodoro");
let buttonPomodoroShort = document.getElementById("buttonSelectionShort");
let buttonPomodoroLong = document.getElementById("buttonSelectionLong");
let countPomodoro = document.getElementById("AchievePomodoroCount");

let totalSeconds; // Declarar fora para uso global
let timer; // Variável para armazenar o intervalo
let initialSeconds;
let pomodoroCount = 0;

//Ação de cronometro ao selecionar o botão "começar"

buttonActionStart.addEventListener("click", () => {
  const [minutes, seconds] = inputTime.value.split(":").map(Number);
  totalSeconds = minutes * 60 + seconds;
  initialSeconds = totalSeconds;

  timer = setInterval(() => {
    totalSeconds--;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    inputTime.value = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    document.title = `Pomodoro - ${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    inputTime.disabled = true;

    if (totalSeconds <= 0) {
      clearInterval(timer);
      pomodoroCount++;
      countPomodoro.innerHTML = pomodoroCount;

      inputTime.disabled = false;

      document.title = "Pomodoro Concluído!";
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
  inputTime.disabled = false;
  inputTime.value = `${String(Math.floor(initialSeconds / 60)).padStart(
    2,
    "0"
  )}:${String(initialSeconds % 60).padStart(2, "0")}`;
});

//Seleção padrão do tempo pomodoro

buttonPomodoro.addEventListener("click", () => {
  clearInterval(timer);
  inputTime.disabled = false;
  inputTime.value = "25:00";
  inputSeconds = 25 * 60;
});

//Seleção de tempo de descanso curto do pomodoro

buttonPomodoroShort.addEventListener("click", () => {
  clearInterval(timer);
  inputTime.disabled = false;
  inputTime.value = "05:00";
  inputSeconds = 5 * 60;
});

//Seleção de tempo de descanso longo do pomodoro

buttonPomodoroLong.addEventListener("click", () => {
  clearInterval(timer);
  inputTime.disabled = false;
  inputTime.value = "40:00";
  inputSeconds = 40 * 60;
});
