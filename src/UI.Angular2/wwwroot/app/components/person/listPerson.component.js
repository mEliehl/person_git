System.register(["angular2/core", 'angular2/router', "../../services/personService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, personService_1;
    var ListPersonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (personService_1_1) {
                personService_1 = personService_1_1;
            }],
        execute: function() {
            ListPersonComponent = (function () {
                function ListPersonComponent(personService, router) {
                    this.persons = [];
                    this.personService = personService;
                    this.router = router;
                }
                ListPersonComponent.prototype.ngOnInit = function () {
                    this.getDate();
                };
                ListPersonComponent.prototype.getDate = function () {
                    var _this = this;
                    this.personService.getPersons()
                        .subscribe(function (persons) {
                        _this.persons = persons;
                    }, function (error) { return console.error('Error: ' + error); });
                };
                ListPersonComponent.prototype.edit = function (person) {
                    this.router.navigate(['EditPerson', { id: person.id }]);
                };
                ListPersonComponent.prototype.delete = function (person) {
                    this.router.navigate(['DeletePerson', { id: person.id }]);
                };
                ListPersonComponent.prototype.add = function () {
                    this.router.navigate(['AddPerson']);
                };
                ListPersonComponent = __decorate([
                    core_1.Component({
                        templateUrl: "views/person/list.html",
                    }), 
                    __metadata('design:paramtypes', [personService_1.PersonService, router_1.Router])
                ], ListPersonComponent);
                return ListPersonComponent;
            }());
            exports_1("ListPersonComponent", ListPersonComponent);
        }
    }
});
