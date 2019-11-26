angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/usuario/monitor", {
            templateUrl: "modules/usuario/monitor/view/monitor.grid.html",
            controller: "monitorGridController"
        })
        .when("/usuario/monitor/new", {
            templateUrl: "modules/usuario/monitor/view/monitor.new.html",
            controller: "monitorNewController"
        })
        .when("/usuario/monitor/edit/:id", {
            templateUrl: "modules/usuario/monitor/view/monitor.edit.html",
            controller: "monitorEditController"
        })
        .when("/usuario/monitor/view/:id", {
            templateUrl: "modules/usuario/monitor/view/monitor.view.html",
            controller: "monitorViewController"
        })
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});