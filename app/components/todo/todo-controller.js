function TodoController(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
var todoService = new TodoService ()
var newToDoList = document.getElementById("newToDoList")

this.todoService = function(e){
	e.preventDefault()
	
}

var toDoList = []

function MakeToDo(str) {
  this.str = str,
  toDoList.push(this)
}

function drawToDos(arrToDos){
  var template = '<ul>'
  for(var i= 0; i<arrToDos.length; i++){
    var toDo = arrToDos[i];
    template +=`
    <li>${toDo.str}</li>
    `
  }
  template += '</ul>'
  newToDoList.innerHTML = template
}

this.createToDo = function createToDo(e) {
  e.preventDefault();
  var form = e.target
  new MakeToDo(form.newToDo)
  form.reset()
  drawToDos(toDoList)
}

}
