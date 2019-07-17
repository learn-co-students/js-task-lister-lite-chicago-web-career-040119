document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", addTask);
});

function addDelete() {
  let deleteButton = document.createElement("button")
  deleteButton.addEventListener("click", deleteTask)
  deleteButton.textContent = "Delete Task";
  return deleteButton
}

function addPriority() {
  let dropdown = document.createElement("select");
  colors = [["black", "Select Priority"],["green", "Low"], ["orange", "Medium"], ["red", "High"]];
  for (let i = 0; i < colors.length; i++) {
    let color = document.createElement("option");
    color.value = colors[i][0];
    color.text = colors[i][1];
    dropdown.options.add(color);
  }
  dropdown.addEventListener("change", prioritizeTask);
  return dropdown;
}

function addTask() {
  event.preventDefault();
  let list = document.getElementById("tasks");
  let task = document.getElementById("new-task-description");
  let taskElement = document.createElement("li");
  taskElement.innerHTML = `${task.value}    `;
  list.appendChild(taskElement);
  taskElement.appendChild(addDelete());
  taskElement.appendChild(addPriority());
  event.target.reset();
}

function deleteTask() {
  this.parentElement.remove()
}

function prioritizeTask() {
  this.parentElement.style.color = this.value;
}
