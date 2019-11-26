(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("salaGridController", function(
    $scope,
    $location,
    $route,
    salaService
  ) {
    $scope.salas = [];

    $scope.salas = {
      Id: undefined,
      IdBloco: undefined,
      Numero: undefined,
      Status: undefined
    };

    $scope.getAllSalas = getAllSalas;
    $scope.getBySala = getBySala;
    $scope.deleteSala = deleteSala;
    $scope.newSala = newSala;
    $scope.editSala = editSala;
    $scope.buscar = buscar;

    function getAllSalas() {
      salaService
        .getAll()
        .then(function(retorno) {
          $scope.salas = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function getBySala(nome) {
      salaService
        .getByNome(nome)
        .then(function(retorno) {
          $scope.salas = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function deleteSala(Id) {
      var r = confirm("Deseja mesmo deletar o registro?");
      if (r == true) {
        salaService
          .delete(Id)
          .then(function() {
            alert("Sala deletada com sucesso!");
            $route.reload();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
    }

    function newSala() {
      $location.url("/basico/sala/new");
    }

    function editSala(Id) {
      $location.url("/basico/sala/edit/" + Id);
    }

    function load() {
      getAllSalas();
    }

    function buscar(busca) {
      if (busca) {
        $scope.getBySala(busca);
      } else {
        $scope.getAllSalas();
      }
    }

    load();
  });
})();
