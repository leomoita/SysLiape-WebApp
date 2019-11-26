angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/outros/ramal", {
            templateUrl: "modules/geral/ramal/view/ramal.grid.html",
            controller: "ramalGridController"
        })
        .when("/outros/ramal/new", {
            templateUrl: "modules/geral/ramal/view/ramal.new.html",
            controller: "ramalNewController"
        })
        .when("/outros/ramal/edit/:id", {
            templateUrl: "modules/geral/ramal/view/ramal.edit.html",
            controller: "ramalEditController"
        })
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});