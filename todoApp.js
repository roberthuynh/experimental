//////////////////////////////////////////////////////////
// V1
//////////////////////////////////////////////////////////
// place to store todos
var todos = ['item 1', 'item 2', 'item 3']

// way to display todos
console.log('My todos:', todos)

// way to add new todos
todos.push('new todo')

// way to change a todo
todos[0] = 'Changed!'
//todos[array value position....first item = 0]

// way to delete a todo
todos.splice(0,1)
//splice(first item, how many items)

//////////////////////////////////////////////////////////
// V2
//////////////////////////////////////////////////////////
//function to display todos
var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
	console.log('My Todos:',todos);
}

displayTodos

//function to add todos
function addTodo(addValue) {
	todos.push(addValue);
	displayTodos(); //This is nested within our new function!
}

addTodo('item 4')

//function to change todos
function changeTodo(position, newValue) { //this function uses two parameters
	todos[position] = newValue;
	displayTodos();
}

changeTodo(0,'changed')

//function to delete todos
function deleteTodo(deletePosition) {
	todos.splice(deletePosition,1);
	//only one parameter is needed as we're deleting only 1 value
	displayTodos();
}

deleteTodo(0)

//////////////////////////////////////////////////////////
// V3
//////////////////////////////////////////////////////////

//Objects are a way to group properties/values
var myObject = {
	property: 'value',
	property2: 'value2',
	property3: 'value3'
};

myObject // will return all properties and all values
myObject.property2 // this will return value2


//Method is a function on an object (method = function property of an object)
var robert = {
	name: 'Robert',
	sayName: function(){
		console.log(this.name); //'this' refers to the object that the function is in
	}
}

robert.sayName //function will return 'Robert'

//////////////////////////////////////////////////////////

var todoList = {
	//store todo arrays on an object
	todos: ['item 1', 'item 2', 'item 3'],
	//displayTodo method
	displayTodos: function() {
		console.log('My Todos', this.todos);
	},
	//addTodo method
	addTodo: function(addValue){
		this.todos.push(addValue);
		this.displayTodos();
	},
	//changeTodo method
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	},
	//deleteTodo method
	deleteTodo: function(deletePosition) {
		this.todos.splice(deletePosition,1);
		this.displayTodos();
	}
};

todoList.displayTodos() //display the three items
todoList.addTodo('new value') //add a fourth item
todoList.changeTodo(0,'first item') //update first item
todoList.deleteTodo(1) //delete second item

//////////////////////////////////////////////////////////
// V4
//////////////////////////////////////////////////////////

//text should be converted into an object like below
{
	todoText: 'item 1',
	completed: false //Boolean can be true or false
}

//////////////////////////////////////////////////////////

//todoList.addTodo should add objected, not text
//todoList.changeTodo should change the todoText property
//todoList.toggleComplete should change the completed property

var todoList = {
	todos: [], //start with no object
	displayTodos: function() {
		console.log('My Todos', this.todos);
	},
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		}); //push function is adding an object instead of text
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText //updated to specify a property in the object
		this.displayTodos();
	},
	deleteTodo: function(deletePosition) {
		this.todos.splice(deletePosition,1);
		this.displayTodos();
	},
	toggleComplete: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed; //The ! flips the boolean value
		this.displayTodos();
	}
};

//////////////////////////////////////////////////////////
// V5
//////////////////////////////////////////////////////////

// initialization 		| i = 0
// condition 			| say 'hey' if i < 3
// final-expression 	| increase i by 1

for (var i = 0; i < 3 ; i = i++) { // i++ MEANS i = i +1
	console.log(i); //prints 0, 1, 3
}

var testArray = ['item 1', 'item 2', 'item 3'];

for (var i = 0; i < testArray.length ; i = i++) { //changed 3 to the length of the array
	console.log(testArray[i]); //prints the 3 items in the test array
}


//STRUCTURE FOR IF ELSE
if(condition) {
	output_for_true;
} else {
	output_for_false;
}

//////////////////////////////////////////////////////////

//.displayTodos should show .todoText
//.displayTodos should tell you if .todos is empty
//.displayTodos needs to be able to show the .completed status

var todoList = {
	todos: [],
	displayTodos: function() {
		//IF ELSE to check if todo is empty
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		} else {
			console.log('My Todos:');
			//add FOR LOOP to display each .todoText for the length of the todo list
			for (var i =0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText)
				//add IF ELSE to check if complete status is TRUE
				if (this.todos[i].completed === true){
					console.log ('(X)',this.todos[i].todoText)
				} else {
					console.log ('( )',this.todos[i].todoText)
				};
			}
		}
	},
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText
		this.displayTodos();
	},
	deleteTodo: function(deletePosition) {
		this.todos.splice(deletePosition,1);
		this.displayTodos();
	},
	toggleComplete: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};

//////////////////////////////////////////////////////////
// V6
//////////////////////////////////////////////////////////

//all true, all false
//all false, all true
//half true, all true

//so to translate the above...
//if ALL TRUE, make ALL FALSE
//otherwise, ALL TRUE

var todoList = {
	todos: [{todoText: 'first', completed: false}],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		} else {
			console.log('My Todos:');
			for (var i =0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText)
				if (this.todos[i].completed === true){
					console.log ('(X)',this.todos[i].todoText)
				} else {
					console.log ('( )',this.todos[i].todoText)
				};
			}
		}
	},
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText
		this.displayTodos();
	},
	deleteTodo: function(deletePosition) {
		this.todos.splice(deletePosition,1);
		this.displayTodos();
	},
	toggleComplete: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll: function() {
		//get total number of todos
		var totalTodos = this.todos.length;
		//get number of completed todos
		var completedTodos = 0;
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			} //no else statement here
		}
		if (completedTodos === totalTodos) {
			//make everything false
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			} //no else statement here
		//make everything true
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

//////////////////////////////////////////////////////////
// V7
//////////////////////////////////////////////////////////

//object vs primitives
//primitives = string, number, boolean, undefined, or null
//comparison for primitives as expected, but object is using memory address

//add 'display todos' button and 'toggle all' button (no user input needed)
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

//clicking 'display todos' should run todoList.displayTodos
displayTodosButton.addEventlistener('click', function(){
	todoList.displayTodos();
})

//clicking 'toggle all' should run todoList.toggleAll
toggleAllButton.addEventlistener('click', function(){
	todoList.toggleAll();
})

//////////////////////////////////////////////////////////
// V8
//////////////////////////////////////////////////////////

debugger; //cool tool to see step by step what's happening!

//refactoring = changing the inner working of your code

//simplify V7 by using onclick and handlers object

//buttons for addTodo, changeTodo, deleteTodo, and toggleComplete
//these buttons require typed input (argument)

var handlers = {
	displayTodos: function(){
		todoList.displayTodos();
	},
	addTodo: function() {
		var addTodoInputText = document.getElementById('addTodoInputText');
		todoList.addTodo(addTodoInputText.value);
		addTodoInputText.value = '';
	},
	changeTodo: function() {
		var changeTodoInputText = document.getElementById('changeTodoInputText');
		var changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
		todoList.changeTodo(changeTodoInputPosition.valueAsNumber,changeTodoInputText.value);
		changeTodoInputText.value = '';
		changeTodoInputPosition.value = '';
	},
	deleteTodo: function() {
		var deleteTodoInputPosition = document.getElementById('deleteTodoInputPosition');
		todoList.deleteTodo(deleteTodoInputPosition.valueAsNumber);
		deleteTodoInputPosition.value = '';
	},
	toggleComplete: function() {
		var toggleCompleteInputPosition = document.getElementById('toggleCompleteInputPosition');
		todoList.toggleComplete(toggleCompleteInputPosition.valueAsNumber);
		toggleCompleteInputPosition.value = '';
	},
	toggleAll: function(){
		todoList.toggleAll();
	},
};

//////////////////////////////////////////////////////////
// V9
//////////////////////////////////////////////////////////

//getting out of the console...
//DOM

var todoLi = document.createElement('li');
var todosUL = document.querySelector('ul');
todosUL //see the LI elements
todosUL.appendChild(todoLi);
view.displayTodos();

//li element (list item) for every todo
//li element has to contain .todoText
//li element has to contain .completed

var view = {
	displayTodos: function () {
		var todoLi = document.createElement('li');
		todosUL.innerHTML = ''; //clears the HTML element so that it doesn't create new bullets
		for (var i = 0; i < todoList.todos.length; i++) {
			var todosUL = document.querySelector('ul');
			// GOAL: make this using below code = '(x) todoText' or '( ) todoText' 
			var todo = todoList.todos[i]; //this is to reduced the  amount of typing since we'll use todoList.todos[i] frequently
			var todoTextWithCompletion = '';

			//if else statement for completed/not
			if (todo.completed === true) {
				todoTextWithCompletion = '(x)' + todo.todoText;
			} else {
				todoTextWithCompletion = '( )' + todo.todoText;
			}

			todoLi.textContent = todoTextWithCompletion; //todoLi.textContent = todoList.todos[i].todoText; DEPRECATED! printed the todos
			todosUL.appendChild(todoLi);
		}
	}
}

//add view.displayTodos() at the end of all the handlers

var handlers = {
	displayTodos: function(){
		todoList.displayTodos();
		view.displayTodos();
	},
	addTodo: function() {
		var addTodoInputText = document.getElementById('addTodoInputText');
		todoList.addTodo(addTodoInputText.value);
		addTodoInputText.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoInputText = document.getElementById('changeTodoInputText');
		var changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
		todoList.changeTodo(changeTodoInputPosition.valueAsNumber,changeTodoInputText.value);
		changeTodoInputText.value = '';
		changeTodoInputPosition.value = '';
		view.displayTodos();
	},
	deleteTodo: function() {
		var deleteTodoInputPosition = document.getElementById('deleteTodoInputPosition');
		todoList.deleteTodo(deleteTodoInputPosition.valueAsNumber);
		deleteTodoInputPosition.value = '';
		view.displayTodos();
	},
	toggleComplete: function() {
		var toggleCompleteInputPosition = document.getElementById('toggleCompleteInputPosition');
		todoList.toggleComplete(toggleCompleteInputPosition.valueAsNumber);
		toggleCompleteInputPosition.value = '';
		view.displayTodos();
	},
	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodos();
	},
};

//todoList.displayTodos is no longer needed anymore as we have view.displayTodos...we're out on the console!
