(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('personApp', [
        'ngRoute','personService'
    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/Views/Person/list.html',
                controller: 'PersonListController'
            })
            .when('/person/add', {
                templateUrl: '/Views/Person/add.html',
                controller: 'PersonAddController'
            })
            .when('/person/edit/:id', {
                templateUrl: '/Views/Person/edit.html',
                controller: 'PersonEditController'
            })
            .when('/person/delete/:id', {
                templateUrl: '/Views/Person/delete.html',
                controller: 'PersonDeleteController'
             });

        $locationProvider.html5Mode(true);
    }

})();