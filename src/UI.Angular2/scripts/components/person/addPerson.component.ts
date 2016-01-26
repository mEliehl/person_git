import {Component} from "angular2/core";
import {Router,RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Person} from "../../models/person"

@Component({
    templateUrl: "views/person/add.html",
    directives: [ROUTER_DIRECTIVES]
})
export class AddPersonComponent {
    person: Person;
    http: Http;
    private router: Router;

    constructor(http: Http,
        router: Router) {
        this.http = http;
        this.router = router;

        this.person = new Person("","","");
    }

    onSubmit() {
        this.http.post('http://localhost:60546/api/person', JSON.stringify(this.person))
            .subscribe(data => { this.router.navigate(['ListPersonCenter']); });
    }
}