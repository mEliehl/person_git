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
    var EditPersonComponent;
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
            EditPersonComponent = (function () {
                function EditPersonComponent(routeParams, router, personService) {
                    this.routeParams = routeParams;
                    this.router = router;
                    this.personService = personService;
                }
                EditPersonComponent.prototype.ngOnInit = function () {
                    this.getDate(this.routeParams.get('id'));
                };
                EditPersonComponent.prototype.getDate = function (id) {
                    var _this = this;
                    this.personService.getPerson(id)
                        .subscribe(function (response) {
                        _this.person = response;
                    }, function (error) { return console.error('Error: ' + error); });
                };
                EditPersonComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.personService.editPerson(this.person)
                        .subscribe(function (data) { _this.router.navigate(['ListPersonCenter']); });
                };
                EditPersonComponent = __decorate([
                    core_1.Component({
                        templateUrl: "views/person/edit.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, personService_1.PersonService])
                ], EditPersonComponent);
                return EditPersonComponent;
            }());
            exports_1("EditPersonComponent", EditPersonComponent);
        }
    }
});
