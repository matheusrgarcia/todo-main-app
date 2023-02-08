let todoList = [];

function handleDarkLightMode() {
  const body = document.getElementById("body");
  if (body.className === "dark") {
    body.className = "light";
  } else {
    body.className = "dark";
  }
}

function clearInput() {
  document.getElementById("new-todo").value = "";
}

function getTodoInput() {
  const newTodo = document.getElementById("new-todo").value;

  if (newTodo) {
    let todo = {
      description: newTodo,
      done: false,
    };
    todoList.push(todo);
    addToList(todo);
    clearInput();
  }
}

function handleKeyPress(event) {
  let keyCode = event.keyCode;
  if (keyCode === 13) {
    getTodoInput();
  }
}

function addToList(item) {
  const todoListItemContainer =
    document.getElementsByClassName("todo-list-items")[0];

  const todoItem = document.createElement("input");
  todoItem.setAttribute("value", item.description);
  todoItem.setAttribute("class", "todo-item todo-new");

  todoListItemContainer.appendChild(todoItem);
}

// function render() {
//   const todoListItemContainer =
//     document.getElementsByClassName("todo-list-items")[0];

//   todoList.forEach((item) => {
//     const todoItem = document.createElement("input");
//     todoItem.value = item.description;
//     todoListItemContainer.appendChild(todoItem);
//   });
// }

// render();

document.addEventListener("keypress", handleKeyPress);
