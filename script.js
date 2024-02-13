const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  var todo = prompt("Add new work");
  if(todo){
    let li= document.createElement("li");
    li.classList.add(classNames.TODO_ITEM);
    var checkb = document.createElement("input");
    var delbtn = document.createElement("button");
    delbtn.classList.add(classNames.TODO_DELETE);
    delbtn.textContent = "Delete ";
    checkb.setAttribute("type","checkbox");
    checkb.setAttribute("onClick","reCountfn()");
    delbtn.setAttribute("onClick","deleteTodo(this)");
    checkb.classList.add(classNames.TODO_CHECKBOX);
    var txt = document.createTextNode(todo);
    li.appendChild(checkb);
    li.appendChild(txt);
    li.appendChild(delbtn);
    list.append(li);

    reCountfn();
  }
}

function reCountfn(){
  var unchecked=0;
  var listitem=document.querySelectorAll(".todo-container");
  var listitemCheckb = document.querySelectorAll(".todo-checkbox");
  itemCountSpan.textContent = listitem.length;
  listitemCheckb.forEach((ele) =>{
    if(!ele.checked){
      unchecked++;
      ele.parentNode.classList.remove("taskDone");
    }else {
      ele.parentNode.classList.add("taskDone");
    }
  });
  uncheckedCountSpan.textContent = unchecked;
}

function deleteTodo(ele){
  var cnfm = confirm("Did you complete it?");
  if(cnfm){
    ele.parentNode.remove(); // Remove only the parent element of the delete button
    reCountfn();
  }
}
