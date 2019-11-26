(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("usuarioAdGridController", function(
    $scope,
    $location,
    $route,
    usuarioAdService
  ) {
    $scope.usuariosAd = [];

    $scope.getAllUsuariosAd = getAllUsuariosAd;
    $scope.getByUsuarioAd = getByUsuarioAd;
    $scope.deleteUsuarioAd = deleteUsuarioAd;
    $scope.newUsuarioAd = newUsuarioAd;
    $scope.editUsuarioAd = editUsuarioAd;
    $scope.viewUsuarioAd = viewUsuarioAd;
    $scope.buscar = buscar;

    function getAllUsuariosAd() {
      usuarioAdService
        .getAll()
        .then(function(retorno) {
          $scope.usuariosAd = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function getByUsuarioAd(nome) {
      usuarioAdService
        .getByNome(nome)
        .then(function(retorno) {
          $scope.usuariosAd = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function deleteUsuarioAd(id, tipo) {
      var r = confirm("Deseja mesmo deletar o registro?");
      if (r == true) {
        usuarioAdService
          .delete(id, tipo)
          .then(function() {
            $route.reload();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
    }

    function newUsuarioAd() {
      $location.url("/usuario/ad/new");
    }

    function viewUsuarioAd(id, tipo) {
      $location.url("/usuario/ad/view/" + id + "?tipo=" + tipo);
    }

    function editUsuarioAd(id, tipo) {
      $location.url("/usuario/ad/edit/" + id + "?tipo=" + tipo);
    }

    function load() {
      getAllUsuariosAd();
    }

    function buscar(busca) {
      if (busca) {
        $scope.getByUsuarioAd(busca);
      } else {
        $scope.getAllUsuariosAd();
      }
    }

    load();
  });
})();
