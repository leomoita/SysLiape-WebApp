(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("usuarioAdNewController", function(
    $scope,
    $location,
    $route,
    usuarioAdService,
    cursoService
  ) {
    $scope.usuarioAd = {
      nome: undefined,
      codigo: undefined,
      login: undefined,
      senha: undefined
    };

    $scope.opcoesCombo = [
      {
        texto: "Aluno",
        valor: 1
      },
      {
        texto: "Professor",
        valor: 2
      }
    ];

    $scope.cursos = [];

    $scope.save = save;
    $scope.cancel = cancel;

    function save(usuarioAd) {
      usuarioAdService
        .save(usuarioAd)
        .then(function(retorno) {
          alert("Usuário cadastrado com sucesso!");
          $route.reload();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/usuario/ad");
    }

    function load(){
      cursoService
        .getAll()
        .then(function(retorno) {
          $scope.cursos = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    };

    load();
  });
})();
