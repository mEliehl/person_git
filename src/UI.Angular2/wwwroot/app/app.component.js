System.register(['angular2/core', 'angular2/router', './components/person/listperson.component', './components/person/addperson.component', './components/person/deletePerson.component', './components/person/editPerson.component'], function(exports_1, context_1) {
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
    var core_1, router_1, listperson_component_1, addperson_component_1, deletePerson_component_1, editPerson_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (listperson_component_1_1) {
                listperson_component_1 = listperson_component_1_1;
            },
            function (addperson_component_1_1) {
                addperson_component_1 = addperson_component_1_1;
            },
            function (deletePerson_component_1_1) {
                deletePerson_component_1 = deletePerson_component_1_1;
            },
            function (editPerson_component_1_1) {
                editPerson_component_1 = editPerson_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <a [routerLink]=\"['ListPersonCenter']\">Person</a>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/person', name: 'ListPersonCenter', component: listperson_component_1.ListPersonComponent, useAsDefault: true },
                        { path: '/person/add', name: 'AddPerson', component: addperson_component_1.AddPersonComponent },
                        { path: '/person/delete/:id', name: 'DeletePerson', component: deletePerson_component_1.DeletePersonComponent },
                        { path: '/person/edit/:id', name: 'EditPerson', component: editPerson_component_1.EditPersonComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
