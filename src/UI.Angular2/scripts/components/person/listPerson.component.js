System.register(["angular2/core", 'angular2/router', 'angular2/http', "../../models/person"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, person_1;
    var ListPersonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (person_1_1) {
                person_1 = person_1_1;
            }],
        execute: function() {
            ListPersonComponent = (function () {
                function ListPersonComponent(http) {
                    this.persons = [];
                    this.http = http;
                    this.getDate();
                }
                ListPersonComponent.prototype.getDate = function () {
                    var _this = this;
                    var data = this.http.get('http://localhost:60546/api/person')
                        .subscribe(function (response) {
                        var persons = response.json();
                        for (var _i = 0; _i < persons.length; _i++) {
                            var person = persons[_i];
                            _this.persons.push(new person_1.Person(person.id, person.name, person.email));
                        }
                    });
                };
                ListPersonComponent = __decorate([
                    core_1.Component({
                        templateUrl: "views/person/listPerson.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ListPersonComponent);
                return ListPersonComponent;
            })();
            exports_1("ListPersonComponent", ListPersonComponent);
        }
    }
});
//# sourceMappingURL=listperson.component.js.map