document.addEventListener("DOMContentLoaded", function() {
  // your code here
  let taskForm = document.getElementById ("create-task-form");
  taskForm.addEventListener("submit", function() {
    event.preventDefault();
    let textField = document.getElementById("new-task-description");
    let newTask = textField.value;
    let taskContainer = document.getElementById("tasks");
    let taskTag = document.createElement("li");
    taskTag.setAttribute("id", newTask)
    let deleteTaskTag = document.createElement("button");
    deleteTaskTag.setAttribute("id", newTask)
    taskTag.textContent = newTask;
    deleteTaskTag.textContent = 'x';
    taskContainer.appendChild(taskTag);
    taskTag.appendChild(deleteTaskTag);

    deleteTaskTag.addEventListener("click", function () {
      document.getElementById(newTask).remove()
    })

  })
});
