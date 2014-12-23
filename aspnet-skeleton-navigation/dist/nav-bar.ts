import _aureliaFramework = require('aurelia-framework');

export class NavBar {
    static annotations() {
        return [new _aureliaFramework.Property('router')];
    }
}