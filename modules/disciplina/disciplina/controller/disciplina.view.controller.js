(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("disciplinaViewController", function(
    $scope,
    $location,
    $routeParams,
    disciplinaService
  ) {
    $scope.disciplina = {
      id: undefined,
      descricao: undefined,
      professor: undefined
    };

    $scope.cancel = cancel;

    function cancel() {
      $location.url("/basico/disciplina");
    }

    function load() {
      disciplinaService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.disciplina = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
