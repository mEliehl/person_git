import {Constant} from "../common/constants"

export class Entity {
    id: any;

    constructor(id: string) {
        this.id = id == "" ? Constant.EMPTY_GUID : id;
    }
}