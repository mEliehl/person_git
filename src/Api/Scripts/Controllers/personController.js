(function () {
    'use strict';

    angular
        .module('personApp')
        .controller('PersonListController', PersonListController)
        .controller('PersonAddController', PersonAddController)
        .controller('PersonEditController', PersonEditController)
        .controller('PersonDeleteController', PersonDeleteController);

    PersonListController.$inject = ['$scope', 'Person'];

    function PersonListController($scope, Person) {
        $scope.persons = Person.query();
    }

    PersonAddController.$inject = ['$scope', '$location', 'Person'];

    function PersonAddController($scope, $location, Person) {
        $scope.person = new Person();
        $scope.add = function () {
            $scope.person.$save(function () {
                $location.path('/');
            });
        };
    }

    PersonEditController.$inject = ['$scope', '$routeParams', '$location', 'Person'];

    function PersonEditController($scope, $routeParams, $location, Person) {
        $scope.person = Person.get({ id: $routeParams.id });
        console.log($scope.person);
        $scope.edit = function () {
            $scope.person.$update(function () {
                $location.path('/');
            });
        };
    }

    PersonDeleteController.$inject = ['$scope', '$routeParams', '$location', 'Person'];

    function PersonDeleteController($scope, $routeParams, $location, Person) {
        $scope.person = Person.get({ id: $routeParams.id });
        $scope.remove = function () {
            $scope.person.$remove({ id: $scope.person.Id }, function () {
                $location.path('/');
            });
        };
    }

})();