System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', 'angular2/http', './app.component', "./services/dataService", "./services/personService", 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, browser_1, router_1, http_1, app_component_1, dataService_1, personService_1;
    var AppBaseRequestOptions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            },
            function (personService_1_1) {
                personService_1 = personService_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppBaseRequestOptions = (function (_super) {
                __extends(AppBaseRequestOptions, _super);
                function AppBaseRequestOptions() {
                    _super.apply(this, arguments);
                    this.headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                }
                return AppBaseRequestOptions;
            }(http_1.BaseRequestOptions));
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
                core_1.provide(http_1.RequestOptions, { useClass: AppBaseRequestOptions }),
                dataService_1.DataService, personService_1.PersonService]);
        }
    }
});
