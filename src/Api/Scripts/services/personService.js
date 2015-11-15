(function () {
    'use strict';

    angular
        .module('personService', ['ngResource'])
        .factory('Person', Person);

    Person.$inject = ['$resource'];

    function Person($resource) {
        return $resource('/api/person/:id');
    }
})();