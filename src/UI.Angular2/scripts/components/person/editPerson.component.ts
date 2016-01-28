import {Component} from "angular2/core";
import {Router,RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Person} from "../../models/person"
import {PersonService} from "../../services/personService"

@Component({
    templateUrl: "views/person/edit.html",
    directives: [ROUTER_DIRECTIVES]
})

export class EditPersonComponent {
    person: Person;
    private routeParams: RouteParams;
    private router: Router;
    private personService: PersonService;

    constructor(routeParams: RouteParams,
        router: Router,
        personService : PersonService) {
        this.routeParams = routeParams;
        this.router = router;
        this.personService = personService

        this.person = new Person("", "", "");
        this.getDate(this.routeParams.get('id'));
    }

    private getDate(id: any) {
        this.personService.getPerson(id)
            .subscribe(response => {
                this.person = new Person(response.id, response.name, response.email);
            },
            error => console.error('Error: ' + error));
    }

    onSubmit() {
        this.personService.editPerson(this.person)
            .subscribe(data => { this.router.navigate(['ListPersonCenter']); });
    }
}