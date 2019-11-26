(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("disciplinaGridController", function(
    $scope,
    $location,
    $route,
    disciplinaService
  ) {
    $scope.disciplinas = [];

    $scope.disciplinas = {
      id: undefined,
      descricao: undefined,
      professor: undefined
    };

    $scope.getAllDisciplinas = getAllDisciplinas;
    $scope.getByDisciplina = getByDisciplina;
    $scope.deleteDisciplina = deleteDisciplina;
    $scope.newDisciplina = newDisciplina;
    $scope.editDisciplina = editDisciplina;
    $scope.viewDisciplina = viewDisciplina;
    $scope.buscar = buscar;

    function getAllDisciplinas() {
      disciplinaService
        .getAll()
        .then(function(retorno) {
          $scope.disciplinas = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function getByDisciplina(nome) {
      disciplinaService
        .getByNome(nome)
        .then(function(retorno) {
          $scope.disciplinas = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function deleteDisciplina(id) {
      var r = confirm("Deseja mesmo deletar o registro?");
      if (r == true) {
        disciplinaService
          .delete(id)
          .then(function() {
            alert("Discplina deletada com sucesso!");
            $route.reload();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
    }

    function newDisciplina() {
      $location.url("/basico/disciplina/new");
    }

    function viewDisciplina(Id) {
      $location.url("/basico/disciplina/view/" + Id);
    }

    function editDisciplina(Id) {
      $location.url("/basico/disciplina/edit/" + Id);
    }

    function load() {
      getAllDisciplinas();
    }

    function buscar(busca) {
      if (busca) {
        $scope.getByDisciplina(busca);
      } else {
        $scope.getAllDisciplinas();
      }
    }

    load();
  });
})();
