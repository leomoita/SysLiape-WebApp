(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("ramalNewController", function(
    $scope,
    $location,
    $route,
    ramalService
  ) {
    $scope.ramal = {
      Departamento: undefined,
      Numero: undefined,
      Nome: undefined
    };

    $scope.save = save;
    $scope.cancel = cancel;

    function save(ramal) {
      ramalService
        .save(ramal)
        .then(function(retorno) {
          alert("Ramal cadastrado com sucesso!");
          $route.reload();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/outros/ramal");
    }
  });
})();
