const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector("input");
const toDoListGroup = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let idNumber = 1;

let toDos = [];

function loadToDos(){
  const loadedData = localStorage.getItem(TODOS_LS);
  if(loadedData){
    const parsedToDos = JSON.parse(loadedData);
    parsedToDos.forEach(n => {
      printToDo(n.text);
    })
  }
}

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoListGroup.removeChild(li);

  const cleanToDos = toDos.filter(n=> n.id != li.id);
  toDos = cleanToDos;
  saveToDos(toDos);
}

function saveToDos(toDosObj){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDosObj));
}

function printToDo(text){
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  
  delBtn.innerText = '❌'
  span.innerText = text;

  delBtn.addEventListener('click', deleteToDo);

  let newId = idNumber;
  li.id = newId;

  idNumber++;

  li.appendChild(delBtn);
  li.appendChild(span);

  toDoListGroup.appendChild(li);

  const toDoObj = {
    text,
    id: newId,
  }

  toDos.push(toDoObj);
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value = '';
    
    printToDo(currentValue);
    saveToDos(toDos);
  })
}

init();