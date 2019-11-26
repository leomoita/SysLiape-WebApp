angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/basico/bloco", {
            templateUrl: "modules/reserva/bloco/view/bloco.grid.html",
            controller: "blocoGridController"
        })
        .when("/basico/bloco/new", {
            templateUrl: "modules/reserva/bloco/view/bloco.new.html",
            controller: "blocoNewController"
        })
        .when("/basico/bloco/edit/:id", {
            templateUrl: "modules/reserva/bloco/view/bloco.edit.html",
            controller: "blocoEditController"
        })
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});