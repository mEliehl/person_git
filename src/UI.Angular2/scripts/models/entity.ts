export class Entity {
    id: any;

    constructor(id: string) {
        this.id = id == "" ? "00000000-0000-0000-0000-000000000000" : id;
    }
}