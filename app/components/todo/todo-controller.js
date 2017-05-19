function TodoController() {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService();

	function drawTodos(data) {
		var elem = document.getElementById('newToDoList');
		var template = '';
		var todoTemplate = '';
		for (var i = 0; i < data.length; i++) {
			var todo = data[i];
			template += `
					${todo} <button type="button" onclick="app.controllers.todoController.removeTodo('${todo}')">Remove</button><br>
				`
		}
		if (data.length > 0) {
			var todos = data.length;
			todoTemplate = `
			<h5>To do: ${todos}</h5>`
		}
		elem.innerHTML = template + todoTemplate;
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault();
		var form = e.target;

		var todosArray = todoService.getTodos(form.newToDo.value);
		todosArray.push(form.newToDo.value);
		todoService.saveTodos(todosArray);
		todosList = todosArray
		drawTodos(todosArray);
		form.reset()
	}

	this.removeTodo = function removeTodo(todo) {
		var todosArray = todoService.getTodos(todo);
		todosArray.splice(todo, 1);
		todoService.saveTodos(todosArray);
		todosList = todosArray
		drawTodos(todosArray);
	}
}