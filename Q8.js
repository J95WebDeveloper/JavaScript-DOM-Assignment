const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

let allTodos = LoadTodos();
updateTodos();

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = todoInput.value;
  if (todoText === "") {
    alert("Please enter your item...");
  } else {
    addTodos();
  }
});

function addTodos() {
  const todoText = todoInput.value.trim();
  allTodos.todoList.push(todoText);
  addToLocalStorage();
  updateTodos();
  todoInput.value = "";
}

function updateTodos() {
  todoList.innerHTML = "";
  allTodos.todoList.forEach((todo, id) => {
    todoItem = CreateTodos(todo, id);
    todoList.appendChild(todoItem);
  });
}

function CreateTodos(todo, id) {
  const todoLI = document.createElement("li");
  const todoText = todo;
  todoLI.innerHTML = `
       <li> ${todoText}
       <button class="delete">delete</button></li>
    `;
  const deleteBtn = todoLI.querySelector(".delete");
  deleteBtn.addEventListener("click", () => DeleteBtn(id));

  return todoLI;
}

function DeleteBtn(id) {
  allTodos.todoList.splice(id, 1);
  addToLocalStorage();
  updateTodos();
}

function LoadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  return todos;
}

function addToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(allTodos));
}
