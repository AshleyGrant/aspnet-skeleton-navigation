declare module "aurelia-router" {
    interface IRoute {
        // todo: update "route" to union type (string | Array<string>) when union types are mainstream
        route: any;
        moduleId: string;
        nav: boolean;
        title?: string;
    }

    interface IRouterConfig {
        title: string;
        map: (routeArray: Array<IRoute>) => void;
    }

    class Router {
        configure: (callback: (config: IRouterConfig) => void) => void;
    }
}

interface IPromise<T> {
    then: (callback: (response: T) => void) => void;
}

declare module "aurelia-http-client" {
    interface IJsonpContent {
        items: Array<Object>;
    }

    interface IJsonpResponse {
        content: IJsonpContent;
    }

    class HttpClient {
        jsonp: (url: string) => IPromise<IJsonpResponse>;
    }
}

declare module "aurelia-framework" {
    class Property {
        constructor(propertyName: string);
    }
}