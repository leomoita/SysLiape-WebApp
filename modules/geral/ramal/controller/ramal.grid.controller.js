(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("ramalGridController", function(
    $scope,
    $location,
    $route,
    ramalService
  ) {
    $scope.ramais = [];

    $scope.ramais = {
      id: undefined,
      departamento: undefined,
      numero: undefined,
      nome: undefined
    };

    $scope.getAllRamais = getAllRamais;
    $scope.getByRamal = getByRamal;
    $scope.deleteRamal = deleteRamal;
    $scope.newRamal = newRamal;
    $scope.editRamal = editRamal;
    $scope.buscar = buscar;

    function getAllRamais() {
      ramalService
        .getAll()
        .then(function(retorno) {
          $scope.ramais = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function getByRamal(nome) {
      ramalService
        .getByNome(nome)
        .then(function(retorno) {
          $scope.ramais = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function deleteRamal(id) {
      var r = confirm("Deseja mesmo deletar o registro?");
      if (r == true) {
        ramalService
          .delete(id)
          .then(function() {
            alert("Ramal deletado com sucesso!");
            $route.reload();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
    }

    function newRamal() {
      $location.url("/outros/ramal/new");
    }

    function editRamal(id) {
      $location.url("/outros/ramal/edit/" + id);
    }

    function load() {
      getAllRamais();
    }

    function buscar(busca) {
      if (busca) {
        $scope.getByRamal(busca);
      } else {
        $scope.getAllRamais();
      }
    }

    load();
  });
})();
