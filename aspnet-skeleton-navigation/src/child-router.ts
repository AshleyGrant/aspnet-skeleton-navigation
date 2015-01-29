import aur = require("aurelia-router");

export class Welcome{
    static inject = [aur.Router];
    heading: string;
    constructor(private router: aur.Router){
        this.heading = "Child Router";
        router.configure(config => {
            config.map([
              { route: ["","welcome"],  moduleId: "welcome",      nav: true, title:"Welcome" },
              { route: "flickr",        moduleId: "flickr",       nav: true },
              { route: "child-router",  moduleId: "child-router", nav: true, title:"Child Router" }
            ]);
    });
}
}