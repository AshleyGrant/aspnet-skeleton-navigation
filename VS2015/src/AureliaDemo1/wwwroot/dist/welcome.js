System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export) {
  'use strict';

  var inject, HttpClient, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}],
    execute: function () {
      Welcome = (function () {
        function Welcome(http) {
          _classCallCheck(this, _Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.previousValue = this.fullName;

          http.configure(function (config) {
            config.useStandardConfiguration();
          });

          this.http = http;
        }

        _createClass(Welcome, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.fetch('api/name/1').then(function (response) {
              return response.json();
            }).then(function (user) {
              _this.firstName = user.FirstName;
              _this.lastName = user.LastName;
            });
          }
        }, {
          key: 'submit',
          value: function submit() {
            this.previousValue = this.fullName;
            alert('Welcome, ' + this.fullName + '!');
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
              return confirm('Are you sure you want to leave?');
            }
          }
        }, {
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        var _Welcome = Welcome;
        Welcome = inject(HttpClient)(Welcome) || Welcome;
        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQUthLE9BQU8sRUE0Q1AsbUJBQW1COzs7Ozs7OztpQ0FqRHhCLE1BQU07O3VDQUNOLFVBQVU7OztBQUlMLGFBQU87QUFNUCxpQkFOQSxPQUFPLENBTU4sSUFBSSxFQUFDOzs7ZUFMakIsT0FBTyxHQUFHLHdDQUF3QztlQUNsRCxTQUFTLEdBQUcsTUFBTTtlQUNsQixRQUFRLEdBQUcsS0FBSztlQUNoQixhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVE7O0FBR3pCLGNBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDckIsa0JBQU0sQ0FDSCx3QkFBd0IsRUFBRSxDQUFDO1dBQ2pDLENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjs7cUJBYlUsT0FBTzs7aUJBZVYsb0JBQUU7OztBQUNOLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7YUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNWLG9CQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ2hDLG9CQUFLLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2pDLENBQUMsQ0FBQztXQUNSOzs7aUJBVUssa0JBQUU7QUFDTixnQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ25DLGlCQUFLLGVBQWEsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO1dBQ3JDOzs7aUJBRVkseUJBQUc7QUFDZCxnQkFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDeEMscUJBQU8sT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7YUFDbkQ7V0FDRjs7O2VBYlcsZUFBRTtBQUNaLG1CQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRztXQUM3Qzs7O3VCQTlCVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7OztBQTRDUCx5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3hCLGdCQUFDLEtBQUssRUFBQztBQUNYLG1CQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDckM7OztlQUhVLG1CQUFtQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0ICdmZXRjaCc7XG5cbkBpbmplY3QoSHR0cENsaWVudClcbmV4cG9ydCBjbGFzcyBXZWxjb21le1xuICBoZWFkaW5nID0gJ1dlbGNvbWUgdG8gdGhlIEF1cmVsaWEgTmF2aWdhdGlvbiBBcHAhJztcbiAgZmlyc3ROYW1lID0gJ0pvaG4nO1xuICBsYXN0TmFtZSA9ICdEb2UnO1xuICBwcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcblxuICBjb25zdHJ1Y3RvcihodHRwKXtcbiAgICAgIGh0dHAuY29uZmlndXJlKGNvbmZpZyA9PiB7XG4gICAgICAgICAgY29uZmlnXG4gICAgICAgICAgICAudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgfVxuXG4gIGFjdGl2YXRlKCl7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCdhcGkvbmFtZS8xJylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3ROYW1lID0gdXNlci5GaXJzdE5hbWU7XG4gICAgICAgICAgICB0aGlzLmxhc3ROYW1lID0gdXNlci5MYXN0TmFtZTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvL0dldHRlcnMgY2FuJ3QgYmUgb2JzZXJ2ZWQgd2l0aCBPYmplY3Qub2JzZXJ2ZSwgc28gdGhleSBtdXN0IGJlIGRpcnR5IGNoZWNrZWQuXG4gIC8vSG93ZXZlciwgaWYgeW91IHRlbGwgQXVyZWxpYSB0aGUgZGVwZW5kZW5jaWVzLCBpdCBubyBsb25nZXIgbmVlZHMgdG8gZGlydHkgY2hlY2sgdGhlIHByb3BlcnR5LlxuICAvL1RvIG9wdGltaXplIGJ5IGRlY2xhcmluZyB0aGUgcHJvcGVydGllcyB0aGF0IHRoaXMgZ2V0dGVyIGlzIGNvbXB1dGVkIGZyb20sIHVuY29tbWVudCB0aGUgbGluZSBiZWxvdy5cbiAgLy9AY29tcHV0ZWRGcm9tKCdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnKVxuICBnZXQgZnVsbE5hbWUoKXtcbiAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gO1xuICB9XG5cbiAgc3VibWl0KCl7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcbiAgICBhbGVydChgV2VsY29tZSwgJHt0aGlzLmZ1bGxOYW1lfSFgKTtcbiAgfVxuXG4gIGNhbkRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuZnVsbE5hbWUgIT09IHRoaXMucHJldmlvdXNWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT8nKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwcGVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsdWUpe1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=