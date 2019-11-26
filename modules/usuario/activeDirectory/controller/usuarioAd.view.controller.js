(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("usuarioAdViewController", function(
    $scope,
    $location,
    $routeParams,
    usuarioAdService
  ) {
    $scope.usuarioAd = {
      id: undefined,
      nome: undefined,
      codigo: undefined,
      login: undefined,
      senha: undefined,
      Tipo: undefined,
      descricaoTipo: undefined
    };

    $scope.cursos = [];

    $scope.cancel = cancel;

    function cancel() {
      $location.url("/usuario/ad");
    }

    function load() {
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

