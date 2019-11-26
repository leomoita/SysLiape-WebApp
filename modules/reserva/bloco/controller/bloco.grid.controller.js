(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("blocoGridController", function(
    $scope,
    $location,
    $route,
    blocoService
  ) {
    $scope.blocos = [];

    $scope.blocos = {
      Id: undefined,
      Descricao: undefined,
    };

    $scope.getAllBlocos = getAllBlocos;
    $scope.getByBloco = getByBloco;
    $scope.deleteBloco = deleteBloco;
    $scope.newBloco = newBloco;
    $scope.editBloco = editBloco;
    $scope.buscar = buscar;

    function getAllBlocos() {
      blocoService
        .getAll()
        .then(function(retorno) {
          $scope.blocos = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function getByBloco(nome) {
      blocoService
        .getByNome(nome)
        .then(function(retorno) {
          $scope.blocos = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function deleteBloco(id) {
      var r = confirm("Deseja mesmo deletar o registro?");
      if (r == true) {
        blocoService
          .delete(id)
          .then(function() {
            alert("Bloco deletado com sucesso!");
            $route.reload();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
    }

    function newBloco() {
      $location.url("/basico/bloco/new");
    }

    function editBloco(id) {
      $location.url("/basico/bloco/edit/" + id);
    }

    function load() {
      getAllBlocos();
    }

    function buscar(busca) {
      if (busca) {
        $scope.getByBloco(busca);
      } else {
        $scope.getAllBlocos();
      }
    }

    load();
  });
})();
