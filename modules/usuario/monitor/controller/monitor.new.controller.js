(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("monitorNewController", function(
    $scope,
    $location,
    $route,
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
    
    $scope.save = save;
    $scope.cancel = cancel;

    function save(monitor) {
      monitorService
        .save(monitor)
        .then(function(retorno) {
          alert("Monitor cadastrado com sucesso!");
          $route.reload();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/usuario/monitor");
    }
  });
})();
