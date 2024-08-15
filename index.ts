// Select DOM elements
const inputField = document.getElementById('todo-input') as HTMLInputElement;
const addButton = document.getElementById('add-todo') as HTMLButtonElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

// Function to create a TODO item
function createTodoItem(text: string) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const todoText = document.createElement('span');
    todoText.textContent = text;

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTodoItem(todoText, li));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodoItem(li));

    li.appendChild(todoText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}

// Function to add a TODO item
function addTodo() {
    const todoText = inputField.value.trim();
    if (todoText !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        inputField.value = ''; // Clear the input field
    }
}

// Function to edit a TODO item
function editTodoItem(todoText: HTMLSpanElement, todoItem: HTMLLIElement) {
    const newText = prompt('Edit TODO:', todoText.textContent || '');
    if (newText !== null && newText.trim() !== '') {
        todoText.textContent = newText.trim();
    }
}

// Function to delete a TODO item
function deleteTodoItem(todoItem: HTMLLIElement) {
    todoList.removeChild(todoItem);
}

// Event listener for the Add button
addButton.addEventListener('click', addTodo);

// Optionally, allow pressing Enter to add a TODO
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
