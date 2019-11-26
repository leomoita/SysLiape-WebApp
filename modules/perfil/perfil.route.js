angular.module("app").config(function ($routeProvider) {

    $routeProvider
		.when("/perfil", {
			templateUrl: "modules/perfil/view/perfil.html",
			controller: "perfilController"
		})
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});