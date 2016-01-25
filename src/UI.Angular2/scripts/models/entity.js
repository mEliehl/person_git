System.register([], function(exports_1) {
    var Entity;
    return {
        setters:[],
        execute: function() {
            Entity = (function () {
                function Entity(id) {
                    this.id = id == "" ? "00000000-0000-0000-0000-000000000000" : id;
                }
                return Entity;
            })();
            exports_1("Entity", Entity);
        }
    }
});
//# sourceMappingURL=entity.js.map