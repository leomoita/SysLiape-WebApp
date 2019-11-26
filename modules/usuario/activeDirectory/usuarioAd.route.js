angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/usuario/ad", {
            templateUrl: "modules/usuario/activeDirectory/view/usuarioAd.grid.html",
            controller: "usuarioAdGridController"
        })
        .when("/usuario/ad/new", {
            templateUrl: "modules/usuario/activeDirectory/view/usuarioAd.new.html",
            controller: "usuarioAdNewController"
        })
        .when("/usuario/ad/edit/:id", {
            templateUrl: "modules/usuario/activeDirectory/view/usuarioAd.edit.html",
            controller: "usuarioAdEditController"
        })
        .when("/usuario/ad/view/:id", {
            templateUrl: "modules/usuario/activeDirectory/view/usuarioAd.view.html",
            controller: "usuarioAdViewController"
        })
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});