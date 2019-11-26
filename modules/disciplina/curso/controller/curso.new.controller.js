(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("cursoNewController", function(
    $scope,
    $location,
    $route,
    cursoService
  ) {
    $scope.curso = {
      Periodo: undefined,
      Descricao: undefined
    };

    $scope.save = save;
    $scope.cancel = cancel;

    function save(curso) {
      cursoService
        .save(curso)
        .then(function(retorno) {
          alert("Curso cadastrado com sucesso!");
          $route.reload();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/curso");
    }
  });
})();
