(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("salaNewController", function(
    $scope,
    $location,
    $route,
    salaService,
    blocoService
  ) {
    $scope.sala = {
      idBloco: undefined,
      numero: undefined,
      status: undefined
    };

    $scope.blocos = [];

    $scope.save = save;
    $scope.cancel = cancel;

    function save(sala) {
      salaService
        .save(sala)
        .then(function(retorno) {
          alert("Sala cadastrado com sucesso!");
          $route.reload();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/sala");
    }

    function load(){
      blocoService
        .getAll()
        .then(function(retorno) {
          $scope.blocos = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
