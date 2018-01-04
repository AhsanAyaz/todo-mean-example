

(function(){
    'use strict';

    angular.module('todo-app')
    .factory('TodoService', ['$http', TodoService]);

    function TodoService($http){
        var apiBaseUrl = 'https://todo-mean-ex.herokuapp.com';

        function getTodos(){
            return $http.get(
                apiBaseUrl + '/api/todos'
            )
        }

        function addTodo(newTodo){
            return $http.post(
                apiBaseUrl + '/api/todos',
                newTodo
            )
        }

        function removeTodo(todoToRemove){
            return $http.delete(
                apiBaseUrl + '/api/todos/' + todoToRemove._id
            )
        }

        function updateTodo(todoToUpdate){
            return $http.put(
                apiBaseUrl + '/api/todos/' + todoToUpdate._id,
                todoToUpdate
            )
        }

        return {
            getTodos: getTodos,
            addTodo: addTodo,
            removeTodo: removeTodo,
            updateTodo: updateTodo
        };
    }

}());
