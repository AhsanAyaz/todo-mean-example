

(function(){
    
    angular.module('todo-app')
    .component('addTodo', {
        bindings: {
            onAddTodo: "&"
        },
        controller: function(){
            var $ctrl = this;
            $ctrl.newTodo = {
                name: '',
                completed: false
            }

            $ctrl.addNewTodo = function(){
                var newTodoObj = Object.assign({}, $ctrl.newTodo)
                $ctrl.onAddTodo({
                    todo: newTodoObj
                });
                $ctrl.newTodo.name = '';
            }
        },
        templateUrl: 'app/components/add-todo/add-todo.component.html'
    })
})();
