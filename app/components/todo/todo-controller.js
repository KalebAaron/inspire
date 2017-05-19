function TodoController(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
var todoService = new TodoService ()
var newToDoList = document.getElementById("newToDoList")

// this.todoService = function(e){
// 	e.preventDefault()
	
// }

var toDoList = []

function MakeToDo(str) {
  this.str = str,
  toDoList.push(this)
  this.createToDo()
}

function drawToDos(arrToDos){
  var template = '<ul>'
  for(var i= 0; i<arrToDos.length; i++){
    var toDo = arrToDos[i];
    template +=`
    <ul>
    <li>${toDo.str}</li><button type="button" onclick="removeToDo(${toDo.str})">Remove</button>
    </ul>
    `
  }
  template += '</ul>'
  newToDoList.innerHTML = template
}

this.removeToDo =function removeToDo(str){
  toDoList.splice(str, 1)
}


this.createToDo = function createToDo(e) {
  e.preventDefault();
  var form = e.target
  new MakeToDo(form.newToDo.value)
  form.reset()
  drawToDos(toDoList)
}

}
