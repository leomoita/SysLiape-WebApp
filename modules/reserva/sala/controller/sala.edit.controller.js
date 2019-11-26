(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("salaEditController", function(
    $scope,
    $location,
    $routeParams,
    salaService,
    blocoService
  ) {
    $scope.sala = {
      idBloco: undefined,
      numero: undefined,
      status: undefined
    };

    $scope.blocos = [];

    $scope.update = update;
    $scope.cancel = cancel;

    function update(sala) {
      salaService
        .update($routeParams.id, sala)
        .then(function(retorno) {
          alert("Sala alterada com sucesso!");
          cancel();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/sala");
    }

    function load() {
      blocoService
        .getAll()
        .then(function(retorno) {
          $scope.blocos = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
      
      salaService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.sala = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
