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
            error => {
                console.log('Error: ' + error);
            });
    }

    onRemove() {
        let id = this.person.id;
        this.personService.deletePerson(id)
            .subscribe(data => {
                this.router.navigate(['ListPersonCenter']);
            },
            error => {
                
                let ul = document.createElement("ul");
                ul.textContent = "Errors";
                let errors = error.json();

                for (let item in errors) {
                    let properties = errors[item]
                    for (let property of properties) {
                        let li = document.createElement("li");
                        li.textContent = property;
                        ul.appendChild(li);
                    }
                }

                let myApp = document.getElementsByClassName("container")[0]
                let row = document.createElement("div");
                row.setAttribute("class", "row");

                let element = document.createElement("div");
                element.setAttribute("class", "card-panel small red accent-1");
                element.appendChild(ul);

                row.appendChild(element);
                myApp.insertBefore(row, myApp.firstChild);
            }
        );
    }
}