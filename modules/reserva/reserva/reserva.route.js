angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/reserva", {
            templateUrl: "modules/reserva/reserva/view/reserva.grid.html",
            controller: "reservaGridController"
        })
        .when("/reserva/new", {
            templateUrl: "modules/reserva/reserva/view/reserva.new.html",
            controller: "reservaNewController"
        })
        .when("/reserva/edit/:id", {
            templateUrl: "modules/reserva/reserva/view/reserva.edit.html",
            controller: "reservaEditController"
        })
        .when("/reserva/view/:id", {
            templateUrl: "modules/reserva/reserva/view/reserva.view.html",
            controller: "reservaViewController"
        })
        .when("/reservaEsporadica/new", {
            templateUrl: "modules/reserva/reserva/view/reservaEsporadica.new.html",
            controller: "reservaEsporadicaNewController"
        })
        .when("/reservaEsporadica/edit/:id", {
            templateUrl: "modules/reserva/reserva/view/reservaEsporadica.edit.html",
            controller: "reservaEsporadicaEditController"
        })
        .when("/reservaEsporadica/view/:id", {
            templateUrl: "modules/reserva/reserva/view/reservaEsporadica.view.html",
            controller: "reservaEsporadicaViewController"
        })
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});