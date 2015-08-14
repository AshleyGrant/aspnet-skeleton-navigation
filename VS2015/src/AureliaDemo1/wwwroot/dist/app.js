System.register(['bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFHYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsSUFBSSxFQUFFLFNBQVMsRUFBTyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUN0RyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxFQUMzRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxDQUM1RyxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUFWVSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAuY3NzISc7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6IFsnJywnd2VsY29tZSddLCAgbmFtZTogJ3dlbGNvbWUnLCAgICAgIG1vZHVsZUlkOiAnd2VsY29tZScsICAgICAgbmF2OiB0cnVlLCB0aXRsZTonV2VsY29tZScgfSxcbiAgICAgIHsgcm91dGU6ICd1c2VycycsICAgICAgICAgbmFtZTogJ3VzZXJzJywgICAgICAgIG1vZHVsZUlkOiAndXNlcnMnLCAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTonR2l0aHViIFVzZXJzJyB9LFxuICAgICAgeyByb3V0ZTogJ2NoaWxkLXJvdXRlcicsICBuYW1lOiAnY2hpbGQtcm91dGVyJywgbW9kdWxlSWQ6ICdjaGlsZC1yb3V0ZXInLCBuYXY6IHRydWUsIHRpdGxlOidDaGlsZCBSb3V0ZXInIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=