import { Http } from 'angular2/http';
import { Injectable } from 'angular2/core';
import {Constant} from "../common/constants"

@Injectable()
export class DataService {
    private get baseURI(): string { return Constant.BASE_URI };
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    get(resource: string, id? : any) {
        let uri = this.baseURI + resource;
        if (id)
            uri += "/" + id;
        return this.http.get(uri);
    }

    post(resource: string, model: any) {
        let uri = this.baseURI + resource;
        return this.http.post(uri, JSON.stringify(model));
    }

    put(resource: string, model: any) {
        let uri = this.baseURI + resource;
        return this.http.put(uri, JSON.stringify(model));
    }

    delete(resource: string, id: any) {
        let uri = this.baseURI + resource + "/" + id;;
        return this.http.delete(uri);
    }
}