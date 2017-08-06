

(function(){
    
    angular.module('todo-app')
    .component('todoItem', {
        bindings: {
            todo: "=",   //$ctrl.todo
            onTodoDelete: "&",
            onTodoUpdate: "&"
        },
        controller: function(){
            var $ctrl = this;

            $ctrl.deleteTodo = function(){
                $ctrl.onTodoDelete({todo: $ctrl.todo});
            }

            $ctrl.onStatusChanged = function(){
                $ctrl.onTodoUpdate({todo: $ctrl.todo});
            }
        },
        templateUrl: 'app/components/todo-item/todo-item.component.html'
    })
})();
