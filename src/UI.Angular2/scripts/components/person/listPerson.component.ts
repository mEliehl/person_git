import {Component, OnInit} from "angular2/core";
import {Router} from 'angular2/router';
import {Person} from "../../models/person"
import {DataService} from "../../services/dataService"
import {PersonService} from "../../services/personService"

@Component({
    templateUrl: "views/person/list.html",
})
export class ListPersonComponent implements OnInit {
    persons: Person[] = [];
    private personService: PersonService;
    private router: Router;

    constructor(personService: PersonService,
        router : Router) {
        this.personService = personService;
        this.router = router;
    }

    ngOnInit() {
        this.getDate();
    }

    private getDate() {
        this.personService.getPersons()
            .subscribe(persons => {
                this.persons = persons;
        },
        error => console.error('Error: ' + error)
        );
    }

    edit(person : Person) {
        this.router.navigate(['EditPerson', { id: person.id }]);
    }

    delete(person: Person) {
        this.router.navigate(['DeletePerson', { id: person.id }]);
    }

    add() {
        this.router.navigate(['AddPerson']);
    }
}
