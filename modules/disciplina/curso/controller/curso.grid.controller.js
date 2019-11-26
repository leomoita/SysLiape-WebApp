(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("cursoGridController", function(
    $scope,
    $location,
    $route,
    cursoService
  ) {
    $scope.cursos = [];

    $scope.cursos = {
      id: undefined,
      periodo: undefined,
      descricao: undefined
    };

    $scope.getAllCursos = getAllCursos;
    $scope.getByCurso = getByCurso;
    $scope.deleteCurso = deleteCurso;
    $scope.newCurso = newCurso;
    $scope.editCurso = editCurso;
    $scope.viewCurso = viewCurso;
    // $scope.goToDisciplinas = goToDisciplinas;
    $scope.buscar = buscar;

    function getAllCursos() {
      cursoService
        .getAll()
        .then(function(retorno) {
          $scope.cursos = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function getByCurso(nome) {
      cursoService
        .getByNome(nome)
        .then(function(retorno) {
          $scope.cursos = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function deleteCurso(id) {
      var r = confirm("Deseja mesmo deletar o registro?");
      if (r == true) {
        cursoService
          .delete(id)
          .then(function() {
            $route.reload();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
    }

    function newCurso() {
      $location.url("/basico/curso/new");
    }

    function viewCurso(Id) {
      $location.url("/basico/curso/view/" + Id);
    }

    function editCurso(Id) {
      $location.url("/basico/curso/edit/" + Id);
    }

    function load() {
      getAllCursos();
    }

    function buscar(busca) {
      if (busca) {
        $scope.getByCurso(busca);
      } else {
        $scope.getAllCursos();
      }
    }

    load();
  });
})();
