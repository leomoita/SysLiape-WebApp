(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("semestreEditController", function(
    $scope,
    $location,
    $routeParams,
    semestreService
  ) {
    $scope.semestre = {
      id: undefined,
      dataInicio: undefined,
      dataTermino: undefined
    };

    $scope.update = update;
    $scope.cancel = cancel;

    function update(semestre) {
      semestreService
        .update($routeParams.id, semestre)
        .then(function(retorno) {
          alert("Semestre alterado com sucesso!");
          cancel();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/semestre");
    }

    function load() {
      semestreService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.semestre.id = angular.copy(retorno.id);
          $scope.semestre.dataInicio = angular.copy(new Date(retorno.dataInicio));
          $scope.semestre.dataTermino = angular.copy(new Date(retorno.dataTermino));
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
