System.config({
  "baseUrl": "dist",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.5.2",
    "aurelia-http-client": "github:aurelia/http-client@0.3.1",
    "bootstrap": "github:twbs/bootstrap@3.3.1",
    "font-awesome": "npm:font-awesome@4.2.0",
    "github:aurelia/binding@0.1.2": {
      "aurelia-metadata": "github:aurelia/metadata@0.1.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.1.1"
    },
    "github:aurelia/bootstrapper@0.5.2": {
      "aurelia-framework": "github:aurelia/framework@0.4.0",
      "aurelia-history": "github:aurelia/history@0.1.1",
      "aurelia-history-browser": "github:aurelia/history-browser@0.1.1",
      "aurelia-loader-systemjs": "github:aurelia/loader-systemjs@0.2.2",
      "aurelia-logging-console": "github:aurelia/logging-console@0.1.1",
      "aurelia-router": "github:aurelia/router@0.2.1",
      "aurelia-templating": "github:aurelia/templating@0.4.0",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.4.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.4.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.5.2"
    },
    "github:aurelia/dependency-injection@0.1.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.1.1",
      "es6-shim": "github:paulmillr/es6-shim@0.21.1"
    },
    "github:aurelia/framework@0.4.0": {
      "aurelia-binding": "github:aurelia/binding@0.1.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.1.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.1.1",
      "aurelia-loader": "github:aurelia/loader@0.2.0",
      "aurelia-logging": "github:aurelia/logging@0.1.1",
      "aurelia-metadata": "github:aurelia/metadata@0.1.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.1.1",
      "aurelia-templating": "github:aurelia/templating@0.4.0"
    },
    "github:aurelia/history-browser@0.1.1": {
      "aurelia-history": "github:aurelia/history@0.1.1"
    },
    "github:aurelia/http-client@0.3.1": {
      "aurelia-path": "github:aurelia/path@0.3.0",
      "es6-shim": "github:paulmillr/es6-shim@0.21.1"
    },
    "github:aurelia/loader-systemjs@0.2.2": {
      "aurelia-loader": "github:aurelia/loader@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.1.1",
      "aurelia-path": "github:aurelia/path@0.3.0"
    },
    "github:aurelia/loader@0.2.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.1",
      "es6-shim": "github:paulmillr/es6-shim@0.21.1",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.2"
    },
    "github:aurelia/router@0.2.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.1.1",
      "aurelia-history": "github:aurelia/history@0.1.1",
      "aurelia-path": "github:aurelia/path@0.3.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.1.1",
      "es6-shim": "github:paulmillr/es6-shim@0.21.1"
    },
    "github:aurelia/templating-binding@0.4.0": {
      "aurelia-binding": "github:aurelia/binding@0.1.2",
      "aurelia-templating": "github:aurelia/templating@0.4.0"
    },
    "github:aurelia/templating-resources@0.4.0": {
      "aurelia-binding": "github:aurelia/binding@0.1.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.1.1",
      "aurelia-templating": "github:aurelia/templating@0.4.0",
      "es6-shim": "github:paulmillr/es6-shim@0.21.1"
    },
    "github:aurelia/templating-router@0.5.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.1.1",
      "aurelia-metadata": "github:aurelia/metadata@0.1.1",
      "aurelia-path": "github:aurelia/path@0.3.0",
      "aurelia-router": "github:aurelia/router@0.2.1",
      "aurelia-templating": "github:aurelia/templating@0.4.0"
    },
    "github:aurelia/templating@0.4.0": {
      "aurelia-binding": "github:aurelia/binding@0.1.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.1.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.1",
      "aurelia-loader": "github:aurelia/loader@0.2.0",
      "aurelia-logging": "github:aurelia/logging@0.1.1",
      "aurelia-metadata": "github:aurelia/metadata@0.1.1",
      "aurelia-path": "github:aurelia/path@0.3.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.1.1",
      "es6-shim": "github:paulmillr/es6-shim@0.21.1"
    },
    "github:jspm/nodelibs@0.0.7": {
      "Base64": "npm:Base64@0.2.1",
      "base64-js": "npm:base64-js@0.0.7",
      "ieee754": "npm:ieee754@1.1.4",
      "inherits": "npm:inherits@2.0.1",
      "json": "github:systemjs/plugin-json@0.1.0"
    },
    "github:twbs/bootstrap@3.3.1": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.1"
    }
  }
});

