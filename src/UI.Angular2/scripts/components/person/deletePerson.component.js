System.register(["angular2/core", 'angular2/router', "../../services/personService"], function(exports_1) {
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
    var DeletePersonComponent;
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
            DeletePersonComponent = (function () {
                function DeletePersonComponent(routeParams, router, personService) {
                    this.routeParams = routeParams;
                    this.router = router;
                    this.personService = personService;
                }
                DeletePersonComponent.prototype.ngOnInit = function () {
                    this.getDate(this.routeParams.get('id'));
                };
                DeletePersonComponent.prototype.getDate = function (id) {
                    var _this = this;
                    this.personService.getPerson(id)
                        .subscribe(function (response) {
                        _this.person = response;
                    }, function (error) {
                        console.log('Error: ' + error);
                    });
                };
                DeletePersonComponent.prototype.onRemove = function () {
                    var _this = this;
                    var id = this.person.id;
                    this.personService.deletePerson(id)
                        .subscribe(function (data) {
                        _this.router.navigate(['ListPersonCenter']);
                    }, function (error) {
                        var ul = document.createElement("ul");
                        ul.textContent = "Errors";
                        var errors = error.json();
                        for (var item in errors) {
                            var properties = errors[item];
                            for (var _i = 0; _i < properties.length; _i++) {
                                var property = properties[_i];
                                var li = document.createElement("li");
                                li.textContent = property;
                                ul.appendChild(li);
                            }
                        }
                        var myApp = document.getElementsByClassName("container")[0];
                        var row = document.createElement("div");
                        row.setAttribute("class", "row");
                        var element = document.createElement("div");
                        element.setAttribute("class", "card-panel small red accent-1");
                        element.appendChild(ul);
                        row.appendChild(element);
                        myApp.insertBefore(row, myApp.firstChild);
                    });
                };
                DeletePersonComponent = __decorate([
                    core_1.Component({
                        templateUrl: "views/person/delete.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, personService_1.PersonService])
                ], DeletePersonComponent);
                return DeletePersonComponent;
            })();
            exports_1("DeletePersonComponent", DeletePersonComponent);
        }
    }
});
//# sourceMappingURL=deletePerson.component.js.map