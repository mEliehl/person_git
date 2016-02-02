import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ListPersonComponent}   from './components/person/listperson.component';
import {AddPersonComponent}   from './components/person/addperson.component';
import {DeletePersonComponent}   from './components/person/deletePerson.component';
import {EditPersonComponent}   from './components/person/editPerson.component';

@Component({
    selector: 'my-app',
    template: `
    <a [routerLink]="['ListPersonCenter']">Person</a>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
        { path: '/person', name: 'ListPersonCenter', component: ListPersonComponent, useAsDefault: true },
        { path: '/person/add', name: 'AddPerson', component: AddPersonComponent },
        { path: '/person/delete/:id', name: 'DeletePerson', component: DeletePersonComponent },
        { path: '/person/edit/:id', name: 'EditPerson', component: EditPersonComponent }
])
export class AppComponent { }