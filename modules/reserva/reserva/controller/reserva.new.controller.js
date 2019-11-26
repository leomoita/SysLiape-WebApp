(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("reservaNewController", function(
    $scope,
    $location,
    $route,
    reservaService,
    disciplinaService,
    semestreService,
    salaService
  ) {
    $scope.reserva = {
      id: undefined,
      idDisciplina: undefined,
      idSemestre: undefined,
      idSala: undefined,
      dataInicio: undefined,
      dataTermino: undefined
    };

    $scope.disciplinas = [];
    $scope.semestres = [];
    $scope.salas = [];

    $scope.save = save;
    $scope.cancel = cancel;

    function save(reserva) {
      reservaService
        .save(reserva)
        .then(function(retorno) {
          alert("Reserva cadastrada com sucesso!");
          $route.reload();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/reserva");
    }

    function load(){
      disciplinaService
        .getAll()
        .then(function(retorno) {
          $scope.disciplinas = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });

      semestreService
        .getAll()
        .then(function(retorno) {
          $scope.semestres = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });

      salaService
        .getAll()
        .then(function(retorno) {
          $scope.salas = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
