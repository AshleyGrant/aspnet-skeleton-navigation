import _aureliaRouter = require('aurelia-router');
var router = _aureliaRouter.Router;

export class Welcome{
    static inject() { return [router]; }
    public heading: string;
    constructor(private router: _aureliaRouter.Router){
        this.heading = 'Child Router';
        router.configure(config => {
            config.map([
              { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
              { route: 'flickr',        moduleId: 'flickr',       nav: true },
              { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
            ]);
    });
}
}