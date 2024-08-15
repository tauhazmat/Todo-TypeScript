"use strict";
// Select DOM elements
var inputField = document.getElementById('todo-input');
var addButton = document.getElementById('add-todo');
var todoList = document.getElementById('todo-list');
// Function to create a TODO item
function createTodoItem(text) {
    var li = document.createElement('li');
    li.className = 'todo-item';
    var todoText = document.createElement('span');
    todoText.textContent = text;
    var editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () { return editTodoItem(todoText, li); });
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () { return deleteTodoItem(li); });
    li.appendChild(todoText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    return li;
}
// Function to add a TODO item
function addTodo() {
    var todoText = inputField.value.trim();
    if (todoText !== '') {
        var todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        inputField.value = ''; // Clear the input field
    }
}
// Function to edit a TODO item
function editTodoItem(todoText, todoItem) {
    var newText = prompt('Edit TODO:', todoText.textContent || '');
    if (newText !== null && newText.trim() !== '') {
        todoText.textContent = newText.trim();
    }
}
// Function to delete a TODO item
function deleteTodoItem(todoItem) {
    todoList.removeChild(todoItem);
}
// Event listener for the Add button
addButton.addEventListener('click', addTodo);
// Optionally, allow pressing Enter to add a TODO
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
