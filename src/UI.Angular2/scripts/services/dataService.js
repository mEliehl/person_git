System.register(['angular2/http', 'angular2/core', "../common/constants"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, constants_1;
    var DataService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                }
                Object.defineProperty(DataService.prototype, "baseURI", {
                    get: function () { return constants_1.Constant.BASE_URI; },
                    enumerable: true,
                    configurable: true
                });
                ;
                DataService.prototype.get = function (resource, id) {
                    var uri = this.baseURI + resource;
                    if (id)
                        uri += "/" + id;
                    return this.http.get(uri).map(function (resource) { return resource.json(); });
                };
                DataService.prototype.post = function (resource, model) {
                    var uri = this.baseURI + resource;
                    return this.http.post(uri, JSON.stringify(model));
                };
                DataService.prototype.put = function (resource, model) {
                    var uri = this.baseURI + resource;
                    return this.http.put(uri, JSON.stringify(model));
                };
                DataService.prototype.delete = function (resource, id) {
                    var uri = this.baseURI + resource + "/" + id;
                    ;
                    return this.http.delete(uri);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            })();
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=dataService.js.map