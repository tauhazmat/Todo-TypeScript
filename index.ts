
const inputField = document.getElementById('todo-input') as HTMLInputElement;
const addButton = document.getElementById('add-todo') as HTMLButtonElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;


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

function addTodo() {
    const todoText = inputField.value.trim();
    if (todoText !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        inputField.value = ''; // Clear the input field
    }
}

function editTodoItem(todoText: HTMLSpanElement, todoItem: HTMLLIElement) {
    const newText = prompt('Edit TODO:', todoText.textContent || '');
    if (newText !== null && newText.trim() !== '') {
        todoText.textContent = newText.trim();
    }
}


function deleteTodoItem(todoItem: HTMLLIElement) {
    todoList.removeChild(todoItem);
}


addButton.addEventListener('click', addTodo);


inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
