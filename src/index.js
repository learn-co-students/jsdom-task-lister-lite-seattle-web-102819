  // your code here
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("create-task-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const userInput = event.target["new-task-description"].value;
  (addTask(createTask(userInput)));
  event.target["new-task-description"].value = ""
})
})

function createTask(task) {
  const createNewTask = document.createElement('li');
  createNewTask.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';

  createNewTask.appendChild(deleteButton);
  deleteButton.addEventListener("click", function() {
    createNewTask.remove();
  });  
  return createNewTask;
}

function addTask(task) {
  const addNewTask = document.querySelector("div#list ul");
  addNewTask.appendChild(task);
}
