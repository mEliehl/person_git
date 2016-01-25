import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Person} from "../../models/person"

@Component({
    templateUrl: "views/person/add.html",
    directives: [ROUTER_DIRECTIVES]
})
export class AddPersonComponent {
    person: Person;
    http: Http;

    constructor(http: Http) {
        this.http = http;
        this.person = new Person("","","");
    }

    onSubmit() {
        this.http.post('http://localhost:60546/api/person', JSON.stringify(this.person))
            //.map(response => <any>(<Response>response).json());
            .subscribe(data => { console.log("data " + data); }, error => { console.log("erro " +error); })
            ;
    }
}