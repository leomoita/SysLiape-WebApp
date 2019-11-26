(function () {
  "use strict";

  var app = angular.module("app");

  app.controller("reservaEditController", function (
    $scope,
    $location,
    $routeParams,
    $route,
    reservaService
  ) {
    $scope.reserva = {
      idDisciplina: undefined,
      descricaoDisciplina: undefined,
      idSemestre: undefined,
      descricaoSemestre: undefined,
      idSala: undefined,
      descricaoSala: undefined,
      dataInicio: undefined,
      dataTermino: undefined
    };

    $scope.detalhe = {
      idReserva: $routeParams.id,
      horaTermino: undefined,
      horaInicio: undefined,
      dia: undefined
    };

    $scope.detalhes = [];

    $scope.opcoesCombo = [
      {
        texto: "Domingo",
        valor: 1
      },
      {
        texto: "Segunda-Feira",
        valor: 2
      },
      {
        texto: "Terça-Feira",
        valor: 3
      },
      {
        texto: "Quarta-Feira",
        valor: 4
      },
      {
        texto: "Quinta-Feira",
        valor: 5
      },
      {
        texto: "Sexta-Feira",
        valor: 6
      },
      {
        texto: "Sábado",
        valor: 7
      },
    ];

    $scope.cancel = cancel;
    $scope.associar = associar;
    $scope.desassociar = desassociar;

    function associar(detalhe) {
      detalhe.horaInicio.setHours(detalhe.horaInicio.getHours() - 3);
      detalhe.horaTermino.setHours(detalhe.horaTermino.getHours() - 3);
      reservaService
        .associar(detalhe)
        .then(function (retorno) {
          alert("Reserva cadastrada com sucesso!");
          $route.reload();
        })
        .catch(function (error) {
          console.log("erro: " + error);
        });
    }

    function desassociar(idDetalhe) {
      reservaService
        .desassociar(idDetalhe)
        .then(function (retorno) {
          alert("Reserva deletada com sucesso!");
          $route.reload();
        })
        .catch(function (error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/reserva");
    }

    function load() {
      reservaService
        .getById($routeParams.id)
        .then(function (retorno) {
          $scope.reserva = angular.copy(retorno);
        })
        .catch(function (error) {
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
