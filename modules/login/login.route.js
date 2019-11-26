angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/login", {
            templateUrl: "modules/login/view/login.html",
            controller: "loginController"
        })
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});