let button = document.getElementById('add')
let todolist = document.getElementById('todoList')
let input = document.getElementById('input')

let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addtodos(todo));
}


button.addEventListener('click', () => {
    todos.push(input.value);
    addtodos(input.value);
    input.value = ""
});


function addtodos(todo) {
    let para = document.createElement('p');
    para.innerText = todo;
    todolist.appendChild(para);
    localStorage.setItem('todos',JSON.stringify(todos));
    para.addEventListener('click',()=>{
        para.style.textDecoration = "line-through";
        remove(todo);
    });
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para);
        remove(todo);
    })
}

function remove(todo) {
    let index = todos.indexOf(todo);
    if(index > -1)
        todos.splice(index,1);
    localStorage.setItem('todos',JSON.stringify(todos));
}