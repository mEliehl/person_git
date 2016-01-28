import { Injectable } from 'angular2/core';
import {DataService} from './dataService'
import {Person} from "../models/person"

@Injectable()
export class PersonService {
    private dataService: DataService;
    private get resource(): string { return "person" };
    
    constructor(dataService: DataService) {
        this.dataService = dataService;
    }

    getListPerson() {
        return this.dataService.get(this.resource);
    }

    getPerson(id : any) {
        return this.dataService.get(this.resource,id);
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