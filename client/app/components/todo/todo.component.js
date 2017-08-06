

(function(){
    
    angular.module('todo-app')
    .component('todo', {
        controller: function(TodoService){
            var $ctrl = this;

            $ctrl.todoList = [];

            $ctrl.$onInit = function(){
                TodoService.getTodos()
                .then(function(response){
                    $ctrl.todoList = response.data.todos;
                }, function(error){
                    console.log(error);
                })
            }

            $ctrl.onAddTodoHandler = function(todo){
                console.log('Todo received from add-todo', todo);
                TodoService.addTodo(todo)
                .then(function(resp){
                    console.log(resp);
                    $ctrl.todoList.push(resp.data.todo);
                }, function(error){
                    console.log(error);
                })
            }

            $ctrl.onTodoDeleteHandler = function(todo){
                console.log('Todo received from todo-item', todo);
                TodoService.removeTodo(todo)
                .then(function(resp){
                    console.log(resp);
                    $ctrl.todoList.splice($ctrl.todoList.indexOf(todo), 1);
                }, function(error){
                    console.log(error);
                })
            }

            $ctrl.onTodoUpdateHandler = function(todo){
                console.log('Todo received from todo-item', todo);
                TodoService.updateTodo(todo)
                .then(function(resp){
                    console.log(resp);
                }, function(error){
                    console.log(error);
                    var index = $ctrl.todoList.indexOf(todo);
                    $ctrl.todoList[index].completed = !$ctrl.todoList[index].completed;
                })
            }
            
        },
        templateUrl: 'app/components/todo/todo.component.html'
    })
})();
