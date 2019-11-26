angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/basico/curso", {
            templateUrl: "modules/disciplina/curso/view/curso.grid.html",
            controller: "cursoGridController"
        })
        .when("/basico/curso/new", {
            templateUrl: "modules/disciplina/curso/view/curso.new.html",
            controller: "cursoNewController"
        })
        .when("/basico/curso/edit/:id", {
            templateUrl: "modules/disciplina/curso/view/curso.edit.html",
            controller: "cursoEditController"
        })
        .when("/basico/curso/view/:id", {
            templateUrl: "modules/disciplina/curso/view/curso.view.html",
            controller: "cursoViewController"
        })
        .otherwise({
            templateUrl: '',
            redirectTo: '/login'
        });
});