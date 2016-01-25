import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ListPersonComponent}   from './components/person/listperson.component';
import {AddPersonComponent}   from './components/person/addperson.component';

@Component({
    selector: 'my-app',
    template: `
    <a [routerLink]="['ListPersonCenter']">Person</a>
    <div class="container-fluid">
        <router-outlet></router-outlet>
    </div>
  `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
        { path: '/person', name: 'ListPersonCenter', component: ListPersonComponent },
        { path: '/person/add', name: 'AddPerson', component: AddPersonComponent}
])
export class AppComponent { }