import {Component} from "angular2/core";
import { Http,Response} from 'angular2/http';
import {Person} from "./models/person"

@Component({
    selector: "my-app",
    templateUrl : "views/person/list.html"
})
export class AppComponent {
    persons: Array<Person> = [];
    http: Http;

    constructor(http: Http) {
        this.http = http;
        this.getDate();
    }

    getDate() {
        var data = this.http.get('http://localhost:60546/api/person')
            .subscribe(persons => {
                var retorno = persons.json();
                for (var i = 0; i < retorno.length; i++) {
                    var person = retorno[i];
                    this.persons.push(new Person(person.id, person.name, person.email));
                }
            });
    }
}
