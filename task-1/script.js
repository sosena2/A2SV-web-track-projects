const taskInput = document.getElementById("task");
function addTask() {
  const taskValue = taskInput.value.trim();
  if (!taskValue) return;

  renderTask(taskValue);
  saveTask(taskValue);
  taskInput.value = "";
}

function loadTask() {
  const taskItem = localStorage.getItem("tasks");
  if (!taskItem) return;

  const tasks = JSON.parse(taskItem);
  tasks.forEach(task => renderTask(task));
}

function saveTask(taskValue) {
  const taskItem = localStorage.getItem("tasks");
  let tasks = [];
  if (taskItem) {
    tasks = JSON.parse(taskItem);
  }
  tasks.push(taskValue);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskValue) {
  const taskItem = localStorage.getItem("tasks");
  if (!taskItem) return;

  let tasks = JSON.parse(taskItem);
  tasks = tasks.filter(task => task !== taskValue);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function editTaskInLocalStorage(oldValue, newValue) {
  const taskItem = localStorage.getItem("tasks");
  if (!taskItem) return;

  let tasks = JSON.parse(taskItem);
  const index = tasks.indexOf(oldValue);
  if (index !== -1) {
    tasks[index] = newValue;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function renderTask(taskValue) {
  const taskList = document.getElementById("taskList");

  const taskDiv = document.createElement("div");
  taskDiv.className = "tasks";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      taskDiv.remove();
      removeTaskFromLocalStorage(taskValue);
    }
  });

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskValue;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "editButton";

  let isEditing = false;

  editButton.addEventListener("click", () => {
    if (!isEditing) {
      taskSpan.contentEditable = true;
      taskSpan.focus();
      editButton.textContent = "Save";
      isEditing = true;
    } else {
      taskSpan.contentEditable = false;
      const newValue = taskSpan.textContent.trim();

      if (newValue && newValue !== taskValue) {
        editTaskInLocalStorage(taskValue, newValue);
        taskValue = newValue; 
      }

      editButton.textContent = "Edit";
      isEditing = false;
    }
  });

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskSpan);
  taskDiv.appendChild(editButton);
  taskList.appendChild(taskDiv);
}

window.addEventListener("DOMContentLoaded", loadTask);
