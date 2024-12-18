let inputTask = document.getElementById("taskInput");
let addTask = document.getElementById("addTaskButton");
let saveTask = [];
let loadJSON = localStorage.getItem("taskSave");

if (loadJSON != null) {
  saveTask = JSON.parse(loadJSON);

  const listTask = document.querySelector("ol");

  saveTask.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>${task}</p><button>x</button>`;
    listTask.appendChild(li);
  });
}

addTask.addEventListener("click", () => {
  if (inputTask.value.trim() === "") {
    alert("Insira uma Tarefa");
  } else {
    let task = inputTask.value;

    let listTask = document.querySelector("ol");
    const li = document.createElement("li");
    li.innerHTML = `<p>${task}</p><button>x</button>`;
    listTask.appendChild(li);

    saveTask.push(task);

    localStorage.setItem("taskSave", JSON.stringify(saveTask));

    inputTask.value = "";
  }
});

document.querySelector("ol").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const taskItem = event.target.parentElement;
    const taskText = taskItem.querySelector("p").textContent;

    taskItem.remove();

    saveTask = saveTask.filter((task) => task !== taskText);
    localStorage.setItem("taskSave", JSON.stringify(saveTask));
  }
});
