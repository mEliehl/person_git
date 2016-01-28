System.register(["../common/constants"], function(exports_1) {
    var constants_1;
    var Entity;
    return {
        setters:[
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            Entity = (function () {
                function Entity(id) {
                    this.id = id == "" ? constants_1.Constant.EMPTY_GUID : id;
                }
                return Entity;
            })();
            exports_1("Entity", Entity);
        }
    }
});
//# sourceMappingURL=entity.js.map