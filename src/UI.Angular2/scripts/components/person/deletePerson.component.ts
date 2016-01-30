import {Component, OnInit} from "angular2/core";
import {Router,RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Person} from "../../models/person"
import {PersonService} from "../../services/personService"

@Component({
    templateUrl: "views/person/delete.html",
    directives: [ROUTER_DIRECTIVES]
})

export class DeletePersonComponent implements OnInit  {
    person: Person;
    private router: Router;
    private routeParams: RouteParams;
    private personService : PersonService

    constructor(routeParams: RouteParams,
        router: Router,
        personService: PersonService) {
        this.routeParams = routeParams;
        this.router = router;
        this.personService = personService;
    }

    ngOnInit() {
        this.getDate(this.routeParams.get('id'));
    }

    private getDate(id: any) {
        this.personService.getPerson(id)
            .subscribe(response => {
                this.person = response;
            },
            error => console.error('Error: ' + error));
    }

    onRemove() {
        let id = this.person.id;
        this.personService.deletePerson(id).subscribe(data => { this.router.navigate(['ListPersonCenter']); });
    }
}