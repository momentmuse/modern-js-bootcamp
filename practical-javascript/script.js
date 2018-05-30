let todoList = {
    todos: [],
    addTodos: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
    },
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
    },
    toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
    },
    toggleAll: function() {
      var totalTodos = this.todos.length;
      var completedTodos = 0;
  // Get number of completed todos
    this.todos.forEach(function(todo) {
        if (todo.completed) {
            completedTodos++;
        }
    });
//   // Case 1: If everything is true, make everything false
//     if (completedTodos === totalTodos) {
//         this.todos.forEach(function(todo) {
//             todo.completed = false;
//         });
//   // Case 2: Otherwise, make everything true
//       } else {
//     this.todos.forEach(function(todo) {
//         todo.completed = true;
//         });
//     }
//truncated version of the code above
    this.todos.forEach(function(todo) {
        if (completedTodos === totalTodos) {
            todo.completed = false;
        } else {
            todo.completed = true;
        }
    });
  }
};
  
  var handlers = {
    addTodos: function() {
      var addTodoTextInput = document.querySelector('#addTodoTextInput');
      if (!addTodoTextInput.value) {
          alert('Please enter a todo!')
      } else {
      todoList.addTodos(addTodoTextInput.value);
      addTodoTextInput.value = '';
      view.displayTodos();
      }
    },
    changeTodo: function() {
      var changeTodoPositionInput = document.querySelector('#changeTodoPositionInput');
      var changeTodoTextInput = document.querySelector('#changeTodoTextInput');
      if (!changeTodoTextInput.value) {
          alert('Please enter your edited todo value!')
      } else {
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
      changeTodoPositionInput.value = '';
      changeTodoTextInput.value = '';
      view.displayTodos();
      }
    },
    deleteTodo: function(position) {
      todoList.deleteTodo(position);
      view.displayTodos();
    },
    toggleCompleted: function() {
      var toggleCompletedPositionInput = document.querySelector('#toggleCompletedPositionInput');
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = '';
      view.displayTodos();
    },
    toggleAll: function() {
      todoList.toggleAll();
      view.displayTodos();
    }
  };

  var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''; 
    todoList.todos.forEach(function(todo, position) {
    //init var
        var todoLi = document.createElement('li');
        var todoTextWithCompletion = '';
    //Assembling li textContent string
        if (todo.completed) {
            todoTextWithCompletion = `(x) ${todo.todoText} `;
        } else {
            todoTextWithCompletion = `( ) ${todo.todoText} `;
        }
    //DOM Manipulation
        todoLi.id = position;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(view.createDeleteButton());
        todosUl.appendChild(todoLi);     
    });
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {
        var elementClicked = event.target;
        if (elementClicked.className === 'deleteButton') {
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
    });
    }
  };

view.setUpEventListeners();
  