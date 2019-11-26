(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("semestreNewController", function(
    $scope,
    $location,
    $route,
    semestreService
  ) {
    $scope.semestre = {
      DataInicio: undefined,
      DataTermino: undefined
    };

    $scope.save = save;
    $scope.cancel = cancel;

    function save(semestre) {
      semestreService
        .save(semestre)
        .then(function(retorno) {
          alert("Semestre cadastrado com sucesso!");
          $route.reload();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/semestre");
    }
  });
})();
