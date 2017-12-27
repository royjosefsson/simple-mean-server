var app = angular.module("simple-mean-server", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'views/success.html'
  })
});