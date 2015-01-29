define(["require", "exports", "aurelia-router"], function (require, exports, aur) {
    var App = (function () {
        function App(router) {
            this.router = router;
            this.router.configure(function (config) {
                config.title = "Aurelia VS/TS";
                config.map([
                    { route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome to VS/TS" },
                    { route: "flickr", moduleId: "flickr", nav: true },
                    { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }
                ]);
            });
        }
        App.inject = [aur.Router];
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=../src/app.js.map