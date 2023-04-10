
// initialising const variables using the given classes from the DOM API
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// adding event listeners to the given event to execute a callback function
document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

// addTodo function creates a new todo item
function addTodo(event) {
    event.preventDefault(); // Prevents page from reloading when a new task is submitted
    
    // Create a new div to hold the todo item
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); // Add the "todo" class to the div
    
    // Create a new list item element for the todo
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; // Set the text of the list item to the value of the input field
    newTodo.classList.add("todo-item"); // Add the "todo-item" class to the list item
    todoDiv.appendChild(newTodo); // Add the list item to the todo div
    
    // Save the todo to local storage
    saveLocalTodos(todoInput.value);
    
    // Create a new button element for the "edit" button
    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></li>'; // Add an icon to the button
    editButton.classList.add("edit-btn"); // Add the "edit-btn" class to the button
    todoDiv.appendChild(editButton); // Add the button to the todo div

    // Create a new button element for the "complete" button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></li>'; // Add an icon to the button
    completedButton.classList.add("complete-btn"); // Add the "complete-btn" class to the button
    todoDiv.appendChild(completedButton); // Add the button to the todo div

    // Create a new button element for the "delete" button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></li>'; // Add an icon to the button
    trashButton.classList.add("trash-btn"); // Add the "trash-btn" class to the button
    todoDiv.appendChild(trashButton); // Add the button to the todo div
    
    todoList.appendChild(todoDiv); // Add the todo div to the todo list
    todoInput.value = ""; // Reset the value of the input field to an empty string
}

// This function saves the provided todo to local storage
function saveLocalTodos(todo) {
    let todos;
    
    // Check if any todos are already saved in local storage
    if(localStorage.getItem("todos") === null) {
        todos = []; // If not, initialize an empty array for the todos
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); // If yes, retrieve the existing todos array
    }
    
    todos.push(todo); // Add the new todo to the array
    localStorage.setItem("todos", JSON.stringify(todos)); // Save the updated todos array to local storage
}

// This function retrieves the saved todos from local storage and adds them to the page
function getLocalTodos() {
    let todos;
    
    // Check if any todos are already saved in local storage
    if(localStorage.getItem("todos") === null) {
        todos = []; // If not, initialize an empty array for the todos
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); // If yes, retrieve the existing todos array
    }
    
    // For each saved todo, create a new div, list item, and two buttons to display the todo on the page
    todos.forEach(function(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-pencil-alt"></li>';
        editButton.classList.add("edit-btn");
        todoDiv.appendChild(editButton);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></li>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv); // Add the todo div to the todo list on the page
    });
}