System.register([], function (_export) {
  'use strict';

  var ChildRouter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ChildRouter = (function () {
        function ChildRouter() {
          _classCallCheck(this, ChildRouter);

          this.heading = 'Child Router';
        }

        _createClass(ChildRouter, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return ChildRouter;
      })();

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxXQUFXOzs7Ozs7Ozs7QUFBWCxpQkFBVztpQkFBWCxXQUFXO2dDQUFYLFdBQVc7O2VBQ3RCLE9BQU8sR0FBRyxjQUFjOzs7cUJBRGIsV0FBVzs7aUJBR1AseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQztBQUM3QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxFQUFHLElBQUksRUFBRSxTQUFTLEVBQVEsUUFBUSxFQUFFLFNBQVMsRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsRUFDeEcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFVLElBQUksRUFBRSxPQUFPLEVBQVUsUUFBUSxFQUFFLE9BQU8sRUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsRUFDN0csRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLElBQUksRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGNBQWMsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsQ0FDOUcsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBWFUsV0FBVyIsImZpbGUiOiJjaGlsZC1yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hpbGRSb3V0ZXJ7XG4gIGhlYWRpbmcgPSAnQ2hpbGQgUm91dGVyJztcblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCd3ZWxjb21lJ10sICBuYW1lOiAnd2VsY29tZScsICAgICAgIG1vZHVsZUlkOiAnd2VsY29tZScsICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6J1dlbGNvbWUnIH0sXG4gICAgICB7IHJvdXRlOiAndXNlcnMnLCAgICAgICAgIG5hbWU6ICd1c2VycycsICAgICAgICAgbW9kdWxlSWQ6ICd1c2VycycsICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTonR2l0aHViIFVzZXJzJyB9LFxuICAgICAgeyByb3V0ZTogJ2NoaWxkLXJvdXRlcicsICBuYW1lOiAnY2hpbGQtcm91dGVyJywgIG1vZHVsZUlkOiAnY2hpbGQtcm91dGVyJywgIG5hdjogdHJ1ZSwgdGl0bGU6J0NoaWxkIFJvdXRlcicgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==