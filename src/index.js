document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const userInput = event.target["new-task-description"].value;
    
    console.log(userInput)

    addTask(createTask(userInput));
    document.getElementById("new-task-description").value = "";
  });
});

function createTask(content) {
  const newTaskNode = document.createElement("li");
  newTaskNode.textContent = content;
  return newTaskNode;
}

function addTask(newNode) {
  const taskList = document.querySelector("div#list ul");
  taskList.appendChild(newNode);

}
