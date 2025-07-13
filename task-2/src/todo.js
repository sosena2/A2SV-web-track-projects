var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList");
var tasks = [];

function renderTask(task) {
    var taskDiv = document.createElement("div");
    taskDiv.className = "tasks";
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            taskDiv.remove();
            removeTask(task);
        }
    });

    var taskSpan = document.createElement("span");
    taskSpan.textContent = task.value;
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "editButton";
    var isEditing = false;
    editButton.addEventListener("click", function () {
        var _a;
        if (!isEditing) {
            taskSpan.contentEditable = "true";
            taskSpan.focus();
            editButton.textContent = "Save";
            isEditing = true;
        }
        else {
            taskSpan.contentEditable = "false";
            var newValue = ((_a = taskSpan.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
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

function addTask() {
    var taskValue = taskInput.value.trim();
    if (!taskValue)
        return;
    var newTask = { value: taskValue };
    tasks.push(newTask);
    renderTask(newTask);
    storeTask();
    taskInput.value = "";
}

function loadTask() {
    var taskItem = localStorage.getItem("tasks");
    if (!taskItem)
        return;
    tasks = JSON.parse(taskItem);
    tasks.forEach(function (task) { return renderTask(task); });
}

function storeTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(tasktoRemove) {
    tasks = tasks.filter(function (task) { return task.value !== tasktoRemove.value; });
    storeTask();
}

function editTask(oldVal, newValue) {
    var taskToEdit = tasks.find(function (task) { return task.value == oldVal; });
    if (taskToEdit) {
        taskToEdit.value = newValue;
        storeTask();
    }
}

window.addEventListener("DOMContentLoaded", loadTask);
