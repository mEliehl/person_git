import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import { HTTP_PROVIDERS,Headers,BaseRequestOptions,RequestOptions} from 'angular2/http';
import {AppComponent} from './app.component';
import {DataService} from "./services/dataService";
import {PersonService} from "./services/personService";

import 'rxjs/Rx';

class AppBaseRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    })
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS,
    provide(RequestOptions, { useClass: AppBaseRequestOptions }),
    DataService,PersonService]);