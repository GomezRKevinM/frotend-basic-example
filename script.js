const input = document.getElementById("taskInput");
const ul = document.querySelector("ul");
const tasks = ["Hacer la compra", "Estudiar para el examen", "Limpiar la casa", "Enviar el informe", "Hacer ejercicio"];
const tasksDone = ["Hacer la compra", "Estudiar para el examen", "Limpiar la casa", "Enviar el informe", "Hacer ejercicio"];
const elementsTaks = document.querySelectorAll(".task");

function addTask(task) {
    tasks.push(task);
    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `${task} <div><button onclick="editarTask(event)" class="controls"><i class="fa-solid fa-pen-to-square"></i></button> <button onclick="removeTask(event)" id="${task}"  class="controls"> <i class="fa-solid fa-trash"></i></button></div>`;
    ul.appendChild(li);
    console.log(tasks);
}

function cargarTareas() {
    tasks.forEach((tarea) => {
        const li = document.createElement("li");
        li.className = "task";
        li.onclick = doneTask;
        li.innerHTML = `${tarea} <div><button onclick="editarTask(event)" class="controls"><i class="fa-solid fa-pen-to-square"></i></button> <button id="${tarea}" onclick="removeTask(event)" class="controls"> <i class="fa-solid fa-trash"></i></button></div>`;
        ul.appendChild(li);
    });
}

function doneTask(event) {
    const taskElement = event.target.closest("li");
    const taskId = taskElement.querySelector(".controls:last-child").id;
    tasks.splice(tasks.indexOf(taskId), 1);
    taskElement.classList.toggle("done");
}


function removeTask(event) {
    const taskElement = event.target.closest("li");
    const taskId = taskElement.querySelector(".controls:last-child").id;
    tasks.splice(tasks.indexOf(taskId), 1);
    taskElement.remove();
    console.log(tasks);
}

function editarTask(event) {
    const taskElement = event.target.closest("li");
    const taskId = taskElement.querySelector(".controls:last-child").id;
    const newTask = prompt("Edita la tarea:", taskId);
    if (newTask && newTask.trim() !== "") {
        tasks[tasks.indexOf(taskId)] = newTask;
        taskElement.innerHTML = `${newTask} <div><button class="controls"><i class="fa-solid fa-pen-to-square"></i></button> <button id="${newTask}" class="controls"> <i class="fa-solid fa-trash"></i></button></div>`;
    }
}

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const task = input.value;
        if (task.trim() !== "") {
            addTask(task);
        }
    }
});

cargarTareas();