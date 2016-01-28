System.register([], function(exports_1) {
    var Constant;
    return {
        setters:[],
        execute: function() {
            Constant = (function () {
                function Constant() {
                }
                Object.defineProperty(Constant, "EMPTY_GUID", {
                    get: function () { return "00000000-0000-0000-0000-000000000000"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constant, "BASE_URI", {
                    get: function () { return "http://localhost:60546/api/"; },
                    enumerable: true,
                    configurable: true
                });
                return Constant;
            })();
            exports_1("Constant", Constant);
        }
    }
});
//# sourceMappingURL=constants.js.map