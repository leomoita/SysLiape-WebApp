(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("semestreViewController", function(
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

    $scope.cancel = cancel;

    function cancel() {
      $location.url("/basico/semestre");
    }

    function load() {
      semestreService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.semestre = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
