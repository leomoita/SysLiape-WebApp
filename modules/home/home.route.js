angular.module("app").config(function ($routeProvider) {

    $routeProvider
		.when("/home", {
			templateUrl: "modules/home/view/home.html",
			controller: "homeController"
		})
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});