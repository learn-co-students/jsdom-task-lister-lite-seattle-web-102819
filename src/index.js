document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const ourForm = document.querySelector("#create-task-form")
  ourForm.addEventListener("submit", function(event) {
    event.preventDefault()
    let userInput = event.target["new-task-description"].value
    addTask(createTask(userInput));
    event.target.reset()
  })
});

function createTask(input) {
  const newTaskNode = document.createElement("li");
  newTaskNode.textContent = input;
  return newTaskNode;
}

function addTask(taskNode) {
  const parentNode = document.querySelector("#tasks");
  parentNode.appendChild(taskNode);
}