document.addEventListener("DOMContentLoaded", () => {
  
document.getElementById("create-task-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // console.dir(event);
  const userInput = event.target["new-task-description"].value;
  addTask(createTask(userInput));
})

// function addDeleteButton (child) {
//     var btn = document.createElement("button");
//     btn.classList.add("remove-task");
//     btn.innerHTML = "x";
//       btn.onclick = function () {
//         child.remove();
//       };
//   }


function createTask(content) {
  const newTaskNode = document.createElement("li")
  newTaskNode.textContent = content ;
  
  const btn = document.createElement("BUTTON");
  btn.classList.add("remove-task")
  btn.innerHTML = "x";


  btn.addEventListener('click', function (e) {
    e.preventDefault();
    newTaskNode.remove();
  })

  newTaskNode.appendChild(btn);
  
  return newTaskNode;
}

function addTask(newNode) {
  const list = document.querySelector("ul#tasks");
  list.appendChild(newNode);
}

// function setup() {
//   var els = document.getElementsByClassName("remove-task");
//   console.log(els)
//   for (var i = 0; i < els.length; i++) {
//       els[i].addEventListener('click', function (e) {
//           e.preventDefault();
//           e.target.closest().remove();
//       });
//   }
// }

// setup();

});
