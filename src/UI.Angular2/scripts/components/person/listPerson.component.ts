import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http,Response} from 'angular2/http';
import {Person} from "../../models/person"
import {AddPersonComponent} from "./addPerson.component"

@Component({
    templateUrl: "views/person/list.html",
    directives: [ROUTER_DIRECTIVES]
})
export class ListPersonComponent {
    persons: Array<Person> = [];
    http: Http;

    constructor(http: Http) {
        this.http = http;
        this.getDate();
    }

    getDate() {
        var data = this.http.get('http://localhost:60546/api/person')
            .subscribe(response => {
                var persons = response.json();
                for (var person of persons) {
                    this.persons.push(new Person(person.id, person.name, person.email));
                }
            });
    }
}
