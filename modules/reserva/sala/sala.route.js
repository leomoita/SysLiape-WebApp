angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/basico/sala", {
            templateUrl: "modules/reserva/sala/view/sala.grid.html",
            controller: "salaGridController"
        })
        .when("/basico/sala/new", {
            templateUrl: "modules/reserva/sala/view/sala.new.html",
            controller: "salaNewController"
        })
        .when("/basico/sala/edit/:id", {
            templateUrl: "modules/reserva/sala/view/sala.edit.html",
            controller: "salaEditController"
        })
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});