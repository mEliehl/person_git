import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Person} from "../../models/person"
import {DataService} from "../../services/dataService"
import {PersonService} from "../../services/personService"


@Component({
    templateUrl: "views/person/listPerson.html",
    directives: [ROUTER_DIRECTIVES]
})
export class ListPersonComponent {
    persons: Array<Person> = [];
    private personService: PersonService;

    constructor(personService: PersonService) {
        this.personService = personService;

        this.getDate();
    }

    private getDate() {
        this.personService.getListPerson()
            .subscribe(persons => {
            for (var person of persons) {
                this.persons.push(new Person(person.id, person.name, person.email));
            }
        },
        error => console.error('Error: ' + error)
        );
    }
}
