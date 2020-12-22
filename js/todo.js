const todoForm = document.querySelector('.js-todoForm'),
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.js-todoList');

const TODO_LS = 'todos';

const todos = [];

function saveTodos(){
    localStorage.setItem(TODO_LS,JSON.stringify(todos));

}

function paintTodo(text){
    //console.log(text);
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = '❌';
    const span = document.createElement('span');
    const newId = todos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text : text,
        id : newId
    };
    todos.push(todoObj);
    saveTodos();
}

function handleTodoSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = '';
}

function loadTodos(){
    const loadedtodos = localStorage.getItem(TODO_LS);
    if (loadedtodos !== null){
        //console.log(loadTodos);
        const parsedTodos = JSON.parse(loadedtodos);
        parsedTodos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}
function init(){
    loadTodos();
    todoForm.addEventListener('submit', handleTodoSubmit)
};

init();