(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("disciplinaNewController", function(
    $scope,
    $location,
    $route,
    disciplinaService,
    usuarioAdService,
    cursoService
  ) {
    $scope.disciplina = {
      descricao: undefined,
      idprofessor: undefined,
      idcurso: undefined
    };

    $scope.professores = [];
    $scope.cursos = [];

    $scope.save = save;
    $scope.cancel = cancel;

    function save(disciplina) {
      disciplinaService
        .save(disciplina)
        .then(function(retorno) {
          alert("Disciplina cadastrada com sucesso!");
          $route.reload();
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function cancel() {
      $location.url("/basico/disciplina");
    }

    function load(){
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
    }

    load();

  });
})();
