
document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskButton = document.querySelector('#create-task-form input[type="submit"]');
  const deleteButtonsUl = document.querySelectorAll('#tasks');
  const tasksUl = document.getElementById('tasks');
  const selectPri = document.getElementById("sort-select")

  taskButton.addEventListener("click", taskButtonListener);
  tasksUl.addEventListener("click", deleteButtonsListener);
  selectPri.addEventListener('change', sortPriority);



  // for (let i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].addEventListener('click', deleteButtonListener);
  // }

});

/*
========================================================
=> Event listeners
========================================================
*/
function taskButtonListener() {
  event.preventDefault();
  let taskDescription = document.querySelector('#new-task-description').value;
  let tasksUl = document.getElementById('tasks');
  createListItemFromTask(taskDescription, tasksUl);
}

function deleteButtonsListener() {
    console.log(event);
    if (event.target.className === "delete-button") {
      event.target.parentNode.remove();
    }
}



/*
========================================================
=> Helper Functions
========================================================
*/
function createListItemFromTask(task_str, ulElement) {
  if (task_str) {
    // create the li tag
    const liElement = document.createElement('li');
    liElement.textContent = task_str;

    // create the button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-button';
    // append the button to the LI
    liElement.appendChild(deleteButton);

    // create a select tag
    const selectPriority = document.createElement('select');
    const priorities = [['black', 'Choose Priority'], ['red','High'], ['yellow', 'Medium'], ['green', 'low']];

    const colors = priorities.map(function(color){
      return color[0];
    });

    const priorityLevels = priorities.map(function(color){
      return color[1];
    });

    for (var i = 0; i < colors.length; i++) {
      let optionElement = document.createElement('option');
      // set the attribute of the option element
      optionElement.setAttribute('value', colors[i]);
      // add value text to the option element
      optionElement.textContent = priorityLevels[i];
      // add event listener for color styling to each option
      //append to the select
      selectPriority.appendChild(optionElement);
    }
    // add event listener for color styling to each option
    selectPriority.addEventListener('change', function(){
      let colorName = event.target.value
      let i = colors.indexOf(colorName)
      this.parentNode.style.color = colorName;
      this.parentNode.className = priorityLevels[i];
    });
    // append the finished Select element to the LI
    liElement.appendChild(selectPriority);


    // at the end, append the finished LI element to the UL Task list
    ulElement.appendChild(liElement);
  }
}

function sortPriority(){
  console.log(event);

  const tasksUl = document.getElementById('tasks');
  let highArray = tasksUl.getElementsByClassName('High');
  let mediumArray = tasksUl.getElementsByClassName('Medium');
  let lowArray = tasksUl.getElementsByClassName('Low');

  console.log(highArray);


  tasksUl.innerHTML = ''
  if (event.target.value === "Asc") {
    // tasksUl.appendChild(lowArray);

    for (var i = 0; i < lowArray.length; i++) {
      tasksUl.appendChild(lowArray[i])
    }

    for (var i = 0; i < mediumArray.length; i++) {
      tasksUl.appendChild(mediumArray[i])
    }

    for (var i = 0; i < highArray.length; i++) {
      tasksUl.appendChild(highArray[i])
    }

  } else if (event.target.value === "Desc") {
    highArray.forEach(function(item){
      tasksUl.appendChild(item);
    });
    mediumArray.forEach(function(item){
      tasksUl.appendChild(item);
    });
    lowArray.forEach(function(item){
      tasksUl.appendChild(item);
    });
  }
}
