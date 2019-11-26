(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("reservaViewController", function(
    $scope,
    $location,
    $routeParams,
    reservaService
  ) {
    $scope.reserva = {
      IdDisciplina: undefined,
      DescricaoDisciplina: undefined,
      IdSemestre: undefined,
      DescricaoSemestre: undefined,
      IdSala: undefined,
      DescricaoSala: undefined,
      DataInicio: undefined,
      DataTermino: undefined,
    };

    $scope.detalhes = [];

    $scope.cancel = cancel;

    function cancel() {
      $location.url("/reserva");
    }

    function load() {
      reservaService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.reserva = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });

      reservaService
        .getDetalhes($routeParams.id)
        .then(function (retorno) {
          $scope.detalhes = angular.copy(retorno);
        })
        .catch(function (error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
