var tasks = [];

function addTask(event) {
  event.preventDefault();

  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  
  var task = taskInput.value;
  if (task.trim() !== "") {
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
}

function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = deleteTask.bind(null, i);
    li.appendChild(deleteButton);

    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = "edit";
    editButton.onclick = editTask.bind(null, i);
    li.appendChild(editButton);

    taskList.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  var newTask = prompt("Enter the new task:", tasks[index]);
  if (newTask !== null) {
    tasks[index] = newTask;
    renderTasks();
  }
}

var taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", addTask);

renderTasks(); // Render initial tasks on page load