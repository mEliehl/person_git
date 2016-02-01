System.register(["./entity"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var entity_1;
    var Person;
    return {
        setters:[
            function (entity_1_1) {
                entity_1 = entity_1_1;
            }],
        execute: function() {
            Person = (function (_super) {
                __extends(Person, _super);
                function Person(id, name, email) {
                    _super.call(this, id);
                    this.name = name;
                    this.email = email;
                }
                return Person;
            }(entity_1.Entity));
            exports_1("Person", Person);
        }
    }
});
