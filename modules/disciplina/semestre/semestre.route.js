angular.module("app").config(function($routeProvider) {
  $routeProvider
    .when("/basico/semestre", {
      templateUrl: "modules/disciplina/semestre/view/semestre.grid.html",
      controller: "semestreGridController"
    })
    .when("/basico/semestre/new", {
      templateUrl: "modules/disciplina/semestre/view/semestre.new.html",
      controller: "semestreNewController"
    })
    .when("/basico/semestre/edit/:id", {
      templateUrl: "modules/disciplina/semestre/view/semestre.edit.html",
      controller: "semestreEditController"
    })
    .when("/basico/semestre/view/:id", {
      templateUrl: "modules/disciplina/semestre/view/semestre.view.html",
      controller: "semestreViewController"
    })
    .otherwise({
      templateUrl: "",
      redirectTo: "/login"
    });
});
