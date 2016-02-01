import {Component, OnInit} from "angular2/core";
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Response} from 'angular2/http';
import {Person} from "../../models/person"
import {PersonService} from "../../services/personService"

@Component({
    templateUrl: "views/person/add.html",
    directives: [ROUTER_DIRECTIVES]
})
export class AddPersonComponent implements OnInit{
    person: Person;
    private router: Router;
    private personService: PersonService;

    constructor(router: Router,
        personService: PersonService) {
        this.router = router;
        this.personService = personService;
    }

    ngOnInit() {
        this.person = new Person("", "", "");
    }

    onSubmit() {
        this.personService.addPerson(this.person)
            .subscribe(data => { this.router.navigate(['ListPersonCenter']); });
    }
}