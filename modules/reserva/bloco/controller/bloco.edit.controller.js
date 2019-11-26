(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("blocoEditController", function(
    $scope,
    $location,
    $routeParams,
    blocoService
  ) {
    $scope.bloco = {
      id: undefined,
      descricao: undefined,
    };

    $scope.update = update;
    $scope.cancel = cancel;

    function update(bloco) {
      blocoService
        .update($routeParams.id, bloco)
        .then(function(retorno) {
          alert("Bloco alterado com sucesso!");
          cancel();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/bloco");
    }

    function load() {
      blocoService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.bloco = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
