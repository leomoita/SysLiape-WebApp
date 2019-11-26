(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("cursoViewController", function(
    $scope,
    $location,
    $routeParams,
    cursoService
  ) {
    $scope.curso = {
      descricaoPeriodo: undefined,
      descricao: undefined
    };

    $scope.cancel = cancel;

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
