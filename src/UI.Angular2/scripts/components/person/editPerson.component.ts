import {Component} from "angular2/core";
import {Router,RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Person} from "../../models/person"

@Component({
    templateUrl: "views/person/edit.html",
    directives: [ROUTER_DIRECTIVES]
})

export class EditPersonComponent {
    person: Person;
    http: Http;
    private routeParams: RouteParams;
    private router: Router;

    constructor(http: Http,
        routeParams: RouteParams,
        router: Router) {
        this.person = new Person("", "", "");
        this.http = http;
        this.routeParams = routeParams;
        this.router = router;

        var url = 'http://localhost:60546/api/person/' + this.routeParams.get('id');
        this.http.get(url)
            .subscribe(data => {
                var p = data.json();
                this.person = new Person(p.id, p.name, p.email);
            });
    }

    onSubmit() {
        this.http.put('http://localhost:60546/api/person', JSON.stringify(this.person))
            .subscribe(data => { this.router.navigate(['ListPersonCenter']); });
    }
}