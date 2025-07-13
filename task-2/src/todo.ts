interface Task {
  value: string;
}
const taskInput = document.getElementById("task") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLDivElement;
let tasks: Task[] = [];

function renderTask(task: Task): void {
  const taskDiv = document.createElement("div");
  taskDiv.className = "tasks";

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      taskDiv.remove();
      removeTask(task);
    }
  });

  const taskSpan = document.createElement("span");
  taskSpan.textContent = task.value;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "editButton";

  let isEditing = false;

  editButton.addEventListener("click", () => {
    if (!isEditing) {
      taskSpan.contentEditable = "true";
      taskSpan.focus();
      editButton.textContent = "Save";
      isEditing = true;
    } else {
      taskSpan.contentEditable = "false";
      const newValue = taskSpan.textContent?.trim() || "";

      if (newValue && newValue !== task.value) {
        editTask(task.value, newValue);
        task.value = newValue;
      }
      editButton.textContent = "Edit";
      isEditing = false;
    }
  });

  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(taskSpan);
  taskDiv.appendChild(editButton);
  taskList.appendChild(taskDiv);
}

function addTask(): void {
  const taskValue = taskInput.value.trim();
  if (!taskValue) return;

  const newTask: Task = { value: taskValue };
  tasks.push(newTask);
  renderTask(newTask);
  storeTask();

  taskInput.value = "";
}

function loadTask(): void {
  const taskItem = localStorage.getItem("tasks");
  if (!taskItem) return;

  tasks = JSON.parse(taskItem) as Task[];
  tasks.forEach((task) => renderTask(task));
}
function storeTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(tasktoRemove: Task): void {
  tasks = tasks.filter((task) => task.value !== tasktoRemove.value);
  storeTask();
}

function editTask(oldVal: string, newValue: string): void {
  const taskToEdit = tasks.find((task) => task.value == oldVal);
  if (taskToEdit) {
    taskToEdit.value = newValue;
    storeTask();
  }
}

window.addEventListener("DOMContentLoaded", loadTask);
