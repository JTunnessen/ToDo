'use strict';
angular.module('todoListApp')
.service('dataService', function ($http) {
    this.helloConsole = function () {
        console.log('This is the Data Service!');
    };
    
    this.getTodos = function (callback) {
        $http.get('mock/todos.json').then(callback)
    };
    
    this.deleteTodo = function (todo) {
        console.log("This " + todo.name + " todo is Deleted");  
        // other logic
    };
    
    this.saveTodos = function (todos) {
        console.log(todos.length + " todos have been saved!");
    }
});