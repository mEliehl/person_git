﻿import { Injectable } from 'angular2/core';
import {DataService} from './dataService'
import {Person} from "../models/person"

@Injectable()
export class PersonService {
    private dataService: DataService;
    private get resource(): string { return "person" };
    
    constructor(dataService: DataService) {
        this.dataService = dataService;
    }

    getPersons() {
        return this.dataService.get(this.resource)
            .map(resource => {
                let persons: Person[] = [];
                let data = resource.json();
                for (let person of data) {
                    persons.push(new Person(person.id, person.name, person.email));
                }
                return persons;
            });
    }

    getPerson(id : any) {
        return this.dataService.get(this.resource, id)
            .map(resource => {
                let data = resource.json()
                return new Person(data.id, data.name, data.email);
            });
    }

    addPerson(person: Person) {
        return this.dataService.post(this.resource, person);
    }

    editPerson(person: Person) {
        return this.dataService.put(this.resource, person);
    }

    deletePerson(id: any) {
        return this.dataService.delete(this.resource, id);
    }
}