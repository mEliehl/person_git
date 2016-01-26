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
    var AddPersonComponent;
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
            AddPersonComponent = (function () {
                function AddPersonComponent(http, router) {
                    this.http = http;
                    this.router = router;
                    this.person = new person_1.Person("", "", "");
                }
                AddPersonComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.http.post('http://localhost:60546/api/person', JSON.stringify(this.person))
                        .subscribe(function (data) { _this.router.navigate(['ListPersonCenter']); });
                };
                AddPersonComponent = __decorate([
                    core_1.Component({
                        templateUrl: "views/person/add.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], AddPersonComponent);
                return AddPersonComponent;
            })();
            exports_1("AddPersonComponent", AddPersonComponent);
        }
    }
});
//# sourceMappingURL=addPerson.component.js.map