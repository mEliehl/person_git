System.register(['angular2/http', 'angular2/core', './dataService', "../models/person"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, dataService_1, person_1;
    var PersonService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            },
            function (person_1_1) {
                person_1 = person_1_1;
            }],
        execute: function() {
            PersonService = (function () {
                function PersonService(dataService, http) {
                    this.http = http;
                    this.dataService = dataService;
                }
                Object.defineProperty(PersonService.prototype, "resource", {
                    get: function () { return "person"; },
                    enumerable: true,
                    configurable: true
                });
                ;
                PersonService.prototype.getPersons = function () {
                    return this.dataService.get(this.resource)
                        .map(function (resource) {
                        var persons = [];
                        var data = resource.json();
                        for (var _i = 0; _i < data.length; _i++) {
                            var person = data[_i];
                            persons.push(new person_1.Person(person.id, person.name, person.email));
                        }
                        return persons;
                    });
                };
                PersonService.prototype.getPerson = function (id) {
                    return this.dataService.get(this.resource, id)
                        .map(function (resource) {
                        var data = resource.json();
                        return new person_1.Person(data.id, data.name, data.email);
                    });
                };
                PersonService.prototype.addPerson = function (person) {
                    return this.dataService.post(this.resource, person);
                };
                PersonService.prototype.editPerson = function (person) {
                    return this.dataService.put(this.resource, person);
                };
                PersonService.prototype.deletePerson = function (id) {
                    return this.dataService.delete(this.resource, id);
                };
                PersonService.prototype.blockPerson = function (id) {
                    var uri = this.dataService.baseURI + this.resource + "/" + id + "/block";
                    return this.http.put(uri, null);
                };
                PersonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [dataService_1.DataService, http_1.Http])
                ], PersonService);
                return PersonService;
            })();
            exports_1("PersonService", PersonService);
        }
    }
});
//# sourceMappingURL=personService.js.map