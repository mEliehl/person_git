import {Component} from "angular2/core";
import {Router,RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Person} from "../../models/person"

@Component({
    templateUrl: "views/person/delete.html",
    directives: [ROUTER_DIRECTIVES]
})

export class DeletePersonComponent {
    person: Person;
    http: Http;
    private router: Router;
    private routeParams: RouteParams;

    constructor(http: Http,
        routeParams: RouteParams,
        router : Router) {
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

    onRemove() {
        var url = 'http://localhost:60546/api/person/' + this.routeParams.get('id');
        this.http.delete(url).subscribe(data => { this.router.navigate(['ListPersonCenter']); });
    }
}