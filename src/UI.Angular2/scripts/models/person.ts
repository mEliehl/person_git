import {Entity} from "./entity"

export class Person extends Entity {
    name: string;
    email: string;

    constructor(id : any,
        name: string,
        email: string) {
        super(id);
        this.name = name;
        this.email = email;
    }
}