(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("monitorEditController", function(
    $scope,
    $location,
    $routeParams,
    monitorService
  ) {
    $scope.monitor = {
      nome: undefined,
      admin: undefined,
      login: undefined,
      senha: undefined
    };

    $scope.opcoesCombo = [
      {
        texto: "Sim",
        valor: true
      },
      {
        texto: "Não",
        valor: false
      }
    ];

    $scope.update = update;
    $scope.cancel = cancel;

    function update(monitor) {
      monitorService
        .update($routeParams.id, monitor)
        .then(function(retorno) {
          alert("Monitor alterado com sucesso!");
          cancel();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/usuario/monitor");
    }

    function load() {
      monitorService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.monitor = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
