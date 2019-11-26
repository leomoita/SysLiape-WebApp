(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("cursoEditController", function(
    $scope,
    $location,
    $routeParams,
    cursoService
  ) {
    $scope.curso = {
      periodo: undefined,
      descricao: undefined
    };

    $scope.disciplinas = [];

    $scope.update = update;
    $scope.cancel = cancel;

    function update(curso) {
      cursoService
        .update($routeParams.id, curso)
        .then(function(retorno) {
          alert("Curso alterado com sucesso!");
          cancel();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/curso");
    }

    function load() {
      cursoService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.curso = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
