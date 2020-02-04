var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

var todos = JSON.parse(localStorage.getItem('local_todo')) || [];

renderTodo();
buttonElement.onclick = addTodo;

function renderTodo(){
  listElement.innerHTML = '';

  for(todo of todos){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    var textLink = document.createTextNode('Excluir');
    var pos = todos.indexOf(todo);

    linkElement.setAttribute('href', '#');

    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    linkElement.appendChild(textLink);
    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);  
    listElement.appendChild(linkElement);    
  } 
}

function addTodo(){
  var inputValue = inputElement.value;
  todos.push(inputValue);
  inputElement.value = '';
  renderTodo();
  saveStorage();
}

function deleteTodo(pos){
  todos.splice(pos, 1);
  renderTodo();
  saveStorage();
}

function saveStorage(){
  localStorage.setItem('local_todo', JSON.stringify(todos));
}