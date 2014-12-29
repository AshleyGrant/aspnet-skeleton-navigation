define(["require", "exports", 'aurelia-router'], function (require, exports, _aureliaRouter) {
    var router = _aureliaRouter.Router;
    var Welcome = (function () {
        function Welcome(router) {
            this.router = router;
            this.heading = 'Child Router';
            router.configure(function (config) {
                config.map([
                    { route: ['', 'welcome'], moduleId: 'welcome', nav: true, title: 'Welcome' },
                    { route: 'flickr', moduleId: 'flickr', nav: true },
                    { route: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
                ]);
            });
        }
        Welcome.inject = function () {
            return [router];
        };
        return Welcome;
    })();
    exports.Welcome = Welcome;
});
//# sourceMappingURL=../src/child-router.js.map