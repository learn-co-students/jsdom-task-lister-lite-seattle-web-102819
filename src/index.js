document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // const userInput = event.target[0].value;
    const userInput = event.target["new-task-description"].value;
    addTask(createTask(userInput));

    event.target["new-task-description"].value = "";
  });

  function createTask(content) {
    const newTaskNode = document.createElement("li");
    newTaskNode.textContent = content;
    
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "x";
    btn.classList.add("remove-task");
    btn.addEventListener('click', function() {
      newTaskNode.remove()
    })

    newTaskNode.appendChild(btn);
    return newTaskNode;
  };

  function addTask(newNode) {
    const list = document.querySelector("ul#tasks");
    list.appendChild(newNode);
  };
});
