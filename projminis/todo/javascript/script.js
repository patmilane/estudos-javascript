// seleção de elementos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const todoEdit = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue; 

// funções

// - salvar todo 
const saveTodo = (text) => {
const todo = document.createElement("div");
todo.classList.add("todo");

const todoTitle = document.createElement("h3");
todoTitle.innerText = text;
todo.appendChild(todoTitle)

const doneBtn = document.createElement("button");
doneBtn.classList.add("finish-todo");
doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
todo.appendChild(doneBtn);

const editBtn = document.createElement("button");
editBtn.classList.add("finish-todo");
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
todo.appendChild(editBtn);

const deleteBtn = document.createElement("button");
deleteBtn.classList.add("finish-todo");
deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
todo.appendChild(deleteBtn);

todoList.appendChild(todo);

todoInput.value = "";
todoInput.focus();
};

const toggleForms = () => {
    todoEdit.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle2 = todo.querySelector("h3")

        if(todoTitle2.innerText === oldInputValue){
            todoTitle2.innerText = text;
        }
    });
}

//eventos

//save todo
todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue)
    }
});

//

document.addEventListener("click", (e) => {
    
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle2;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle2 = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit-todo")){
        toggleForms();

        editInput.value = todoTitle2;
        oldInputValue = todoTitle2;
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault;

    toggleForms()
});

todoEdit.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value;

    if(editInputValue){
        updateTodo(editInputValue)
    }

    toggleForms()
})