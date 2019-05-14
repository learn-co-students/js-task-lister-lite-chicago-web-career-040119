document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit", addDiv);
});



function addTask() {
  let task = document.getElementById("new-task-description")
  let taskElement = document.createElement("li")
  taskElement.innerHTML = task.value
  return taskElement
}

function addDelete() {
  let deleteButton = document.createElement("button")
  deleteButton.addEventListener("click", deleteDiv)
  deleteButton.textContent = "Delete Task"
  return deleteButton
}

function addDiv() {
  event.preventDefault()
  let list = document.getElementById("tasks")
  let div = document.createElement("div")
  list.appendChild(div);
  div.appendChild(addTask());
  div.appendChild(addDelete());

}


function deleteDiv() {
  this.parentElement.remove()
}
