

(function(){
    
    angular.module('todo-app')
    .component('todoItem', {
        bindings: {
            todo: "="   //$ctrl.todo
        },
        controller: function(){
            
        },
        templateUrl: 'app/components/todo-item/todo-item.component.html'
    })
})();
