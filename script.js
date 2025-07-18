const todoinput = document.getElementById("todoinput");
const Addbutton = document.getElementById("Addbutton");
const todolist = document.getElementById("todolist");

function addtododom(todotext, isCompleted = false) {
    const listitem = document.createElement("li");
    listitem.classList.add("todo-item");

    const span = document.createElement("span");
    span.classList.add("todo-item-text");
    span.textContent = todotext;

    if (isCompleted) {
        span.classList.add("todo-item-complete");
    }

    const btnGroup = document.createElement("div");

    const completebutton = document.createElement("button");
    completebutton.classList.add("action-button", "complete-button");
    completebutton.textContent = isCompleted ? "Uncomplete" : "Complete";

    const deletebutton = document.createElement("button");
    deletebutton.classList.add("action-button", "delete-button");
    deletebutton.textContent = "Delete";

    completebutton.addEventListener("click", () => {
        span.classList.toggle("todo-item-complete");
        listitem.classList.toggle("todo-item-done"); 
        const isNowCompleted = span.classList.contains("todo-item-complete");

        completebutton.textContent = isNowCompleted ? "Uncomplete" : "Complete";

        if (isNowCompleted) {
            completebutton.classList.remove("complete-button");
            completebutton.classList.add("uncomplete-button");
        } else {
            completebutton.classList.remove("uncomplete-button");
            completebutton.classList.add("complete-button");
        }
    });
    

    deletebutton.addEventListener("click", () => {
        todolist.removeChild(listitem);
    });

    btnGroup.appendChild(completebutton);
    btnGroup.appendChild(deletebutton);

    listitem.appendChild(span);
    listitem.appendChild(btnGroup);

    todolist.appendChild(listitem);
}

function adtodo() {
    const todotext = todoinput.value.trim();
    if (todotext.length > 0) {
        addtododom(todotext);
        todoinput.value = "";
    }
}

Addbutton.addEventListener("click", adtodo);
