import _aureliaRouter = require('aurelia-router');
var router = _aureliaRouter.Router;

export class App {
    static inject() { return [router]; }
    constructor(private router: _aureliaRouter.Router) {
        this.router.configure((config) => {
            config.title = 'Aurelia VS/TS';
            config.map([
                { route: ['', 'welcome'], moduleId: 'welcome', nav: true, title: 'Welcome to VS/TS' },
                { route: 'flickr', moduleId: 'flickr', nav: true },
                { route: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
            ]);
        });
    }
} 