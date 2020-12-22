const todoForm = document.querySelector('.js-todoForm'),
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.js-todoList');

const TODO_LS = 'todos';

function paintTodo(text){
    //console.log(text);
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = '❌';
    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = '';
}

function loadTodos(){
    const todos = localStorage.getItem(TODO_LS);
    if (todos !== null){
        
    }
}
function init(){
    loadTodos();
    todoForm.addEventListener('submit', handleTodoSubmit)
};

init();