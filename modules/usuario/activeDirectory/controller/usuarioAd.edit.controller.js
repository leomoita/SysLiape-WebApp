(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("usuarioAdEditController", function(
    $scope,
    $location,
    $routeParams,
    usuarioAdService,
    cursoService
  ) {
    $scope.usuarioAd = {
      Nome: undefined,
      Codigo: undefined,
      Login: undefined,
      Senha: undefined
    };

    $scope.cursos = [];

    $scope.update = update;
    $scope.cancel = cancel;

    function update(usuarioAd) {
      usuarioAdService
        .update($routeParams.id, usuarioAd)
        .then(function(retorno) {
          alert("Usuário alterado com sucesso!");
          cancel();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/usuario/ad");
    }

    function load() {
      cursoService
        .getAll()
        .then(function(retorno) {
          $scope.cursos = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });

      usuarioAdService
        .getById($routeParams.id, $routeParams.tipo)
        .then(function(retorno) {
          $scope.usuarioAd = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
