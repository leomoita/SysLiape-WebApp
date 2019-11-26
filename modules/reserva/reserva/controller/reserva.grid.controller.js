(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("reservaGridController", function(
    $scope,
    $location,
    $route,
    reservaService
  ) {
    $scope.reservas = [];

    $scope.reservas = {
      id: undefined,
      disciplina: undefined,
      semestre: undefined,
      sala: undefined,
      dataInicio: undefined,
      dataTermino: undefined
    };

    $scope.getAllReservas = getAllReservas;
    $scope.getByReserva = getByReserva;
    $scope.deleteReserva = deleteReserva;
    $scope.newReserva = newReserva;
    $scope.editReserva = editReserva;
    $scope.viewReserva = viewReserva;
    $scope.buscar = buscar;

    function getAllReservas() {
      reservaService
        .getAll()
        .then(function(retorno) {
          $scope.reservas = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function getByReserva(sala) {
      reservaService
        .getBySala(sala)
        .then(function(retorno) {
          $scope.reservas = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function deleteReserva(id) {
      var r = confirm("Deseja mesmo deletar o registro?");
      if (r == true) {
        reservaService
          .delete(id)
          .then(function() {
            $route.reload();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
    }

    function newReserva() {
      $location.url("/reserva/new");
    }

    function viewReserva(Id) {
      $location.url("/reserva/view/" + Id);
    }

    function editReserva(Id) {
      $location.url("/reserva/edit/" + Id);
    }

    function load() {
      getAllReservas();
    }

    function buscar(busca) {
      if (busca) {
        $scope.getByReserva(busca);
      } else {
        $scope.getAllReservas();
      }
    }

    load();
  });
})();
