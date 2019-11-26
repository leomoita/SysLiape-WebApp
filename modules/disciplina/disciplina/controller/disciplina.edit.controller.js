(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("disciplinaEditController", function(
    $scope,
    $location,
    $routeParams,
    disciplinaService,
    usuarioAdService,
    cursoService
  ) {
    $scope.disciplina = {
      id: undefined,
      descricao: undefined,
      idProfessor: undefined,
      idCurso: undefined
    };

    $scope.professores = [];
    $scope.cursos = [];

    $scope.update = update;
    $scope.cancel = cancel;

    function update(disciplina) {
      disciplinaService
        .update($routeParams.id, disciplina)
        .then(function(retorno) {
          alert("Discplina alterada com sucesso!");
          cancel();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/disciplina");
    }

    function load() {
      usuarioAdService
        .getByTipo(2)
        .then(function(retorno) {
          $scope.professores = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });

      cursoService
        .getAll()
        .then(function(retorno) {
          $scope.cursos = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });

      disciplinaService
        .getById($routeParams.id)
        .then(function(retorno) {
          $scope.disciplina = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    load();
  });
})();
