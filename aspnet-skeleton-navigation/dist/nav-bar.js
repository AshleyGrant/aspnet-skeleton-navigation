define(["require", "exports", 'aurelia-framework'], function (require, exports, _aureliaFramework) {
    var NavBar = (function () {
        function NavBar() {
        }
        NavBar.annotations = function () {
            return [new _aureliaFramework.Property('router')];
        };
        return NavBar;
    })();
    exports.NavBar = NavBar;
});
//# sourceMappingURL=../src/nav-bar.js.map