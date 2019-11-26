(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("blocoNewController", function(
    $scope,
    $location,
    $route,
    blocoService
  ) {
    $scope.bloco = {
      Id: undefined,
      Descricao: undefined,
    };

    $scope.save = save;
    $scope.cancel = cancel;

    function save(bloco) {
      blocoService
        .save(bloco)
        .then(function(retorno) {
          alert("Bloco cadastrado com sucesso!");
          $route.reload();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/bloco");
    }
  });
})();
