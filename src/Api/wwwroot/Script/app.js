!function(){"use strict";function a(a,b){a.when("/",{templateUrl:"/Views/Person/list.html",controller:"PersonListController"}).when("/person/add",{templateUrl:"/Views/Person/add.html",controller:"PersonAddController"}).when("/person/edit/:id",{templateUrl:"/Views/Person/edit.html",controller:"PersonEditController"}).when("/person/delete/:id",{templateUrl:"/Views/Person/delete.html",controller:"PersonDeleteController"}),b.html5Mode(!0)}a.$inject=["$routeProvider","$locationProvider"],angular.module("personApp",["ngRoute","personService"]).config(a)}(),function(){"use strict";function a(a,b){a.persons=b.query()}function b(a,b,c){a.person=new c,a.add=function(){a.person.$save(function(){b.path("/")})}}function c(a,b,c,d){a.person=d.get({id:b.id}),a.edit=function(){a.person.$update(function(){c.path("/")})}}function d(a,b,c,d){a.person=d.get({id:b.id}),a.remove=function(){a.person.$remove({id:a.person.Id},function(){c.path("/")})}}angular.module("personApp").controller("PersonListController",a).controller("PersonAddController",b).controller("PersonEditController",c).controller("PersonDeleteController",d),a.$inject=["$scope","Person"],b.$inject=["$scope","$location","Person"],c.$inject=["$scope","$routeParams","$location","Person"],d.$inject=["$scope","$routeParams","$location","Person"]}(),function(){"use strict";function a(a){return a("/api/person/:id",null,{update:{method:"PUT"}})}angular.module("personService",["ngResource"]).factory("Person",a),a.$inject=["$resource"]}();