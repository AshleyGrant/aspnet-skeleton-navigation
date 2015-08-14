System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export) {
  'use strict';

  var inject, HttpClient, Users;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}],
    execute: function () {
      Users = (function () {
        function Users(http) {
          _classCallCheck(this, _Users);

          this.heading = 'Github Users';
          this.users = [];

          http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
          });

          this.http = http;
        }

        _createClass(Users, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.fetch('users').then(function (response) {
              return response.json();
            }).then(function (users) {
              return _this.users = users;
            });
          }
        }]);

        var _Users = Users;
        Users = inject(HttpClient)(Users) || Users;
        return Users;
      })();

      _export('Users', Users);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFLYSxLQUFLOzs7Ozs7OztpQ0FMVixNQUFNOzt1Q0FDTixVQUFVOzs7QUFJTCxXQUFLO0FBSUwsaUJBSkEsS0FBSyxDQUlKLElBQUksRUFBQzs7O2VBSGpCLE9BQU8sR0FBRyxjQUFjO2VBQ3hCLEtBQUssR0FBRyxFQUFFOztBQUdSLGNBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDdkIsa0JBQU0sQ0FDSCx3QkFBd0IsRUFBRSxDQUMxQixXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztXQUMzQyxDQUFDLENBQUM7O0FBRUgsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQVpVLEtBQUs7O2lCQWNSLG9CQUFFOzs7QUFDUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FDNUIsSUFBSSxDQUFDLFVBQUEsUUFBUTtxQkFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2FBQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxLQUFLO3FCQUFJLE1BQUssS0FBSyxHQUFHLEtBQUs7YUFBQSxDQUFDLENBQUM7V0FDdEM7OztxQkFsQlUsS0FBSztBQUFMLGFBQUssR0FEakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLEtBQUssS0FBTCxLQUFLO2VBQUwsS0FBSyIsImZpbGUiOiJ1c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCAnZmV0Y2gnO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgVXNlcnN7XG4gIGhlYWRpbmcgPSAnR2l0aHViIFVzZXJzJztcbiAgdXNlcnMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihodHRwKXtcbiAgICBodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xuICAgICAgY29uZmlnXG4gICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmh0dHAgPSBodHRwO1xuICB9XG5cbiAgYWN0aXZhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCd1c2VycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbih1c2VycyA9PiB0aGlzLnVzZXJzID0gdXNlcnMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=