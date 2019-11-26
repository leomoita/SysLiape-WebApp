angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/basico/disciplina", {
            templateUrl: "modules/disciplina/disciplina/view/disciplina.grid.html",
            controller: "disciplinaGridController"
        })
        .when("/basico/disciplina/new", {
            templateUrl: "modules/disciplina/disciplina/view/disciplina.new.html",
            controller: "disciplinaNewController"
        })
        .when("/basico/disciplina/edit/:id", {
            templateUrl: "modules/disciplina/disciplina/view/disciplina.edit.html",
            controller: "disciplinaEditController"
        })
        .when("/basico/disciplina/view/:id", {
            templateUrl: "modules/disciplina/disciplina/view/disciplina.view.html",
            controller: "disciplinaViewController"
        })
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});