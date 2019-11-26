(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("semestreGridController", function(
    $scope,
    $location,
    $route,
    semestreService
  ) {
    $scope.semestres = [];

    $scope.semestres = {
      id: undefined,
      dataInicio: undefined,
      dataTermino: undefined
    };

    $scope.getAllSemestres = getAllSemestres;
    $scope.getBySemestre = getBySemestre;
    $scope.deleteSemestre = deleteSemestre;
    $scope.newSemestre = newSemestre;
    $scope.editSemestre = editSemestre;
    $scope.viewSemestre = viewSemestre;
    $scope.buscar = buscar;

    function getAllSemestres() {
      semestreService
        .getAll()
        .then(function(retorno) {
          $scope.semestres = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function getBySemestre(data) {
      semestreService
        .getByData(data)
        .then(function(retorno) {
          $scope.semestres = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function deleteSemestre(id) {
      var r = confirm("Deseja mesmo deletar o registro?");
      if (r == true) {
        semestreService
          .delete(id)
          .then(function() {
            alert("Semestre deletado com sucesso!");
            $route.reload();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
    }

    function newSemestre() {
      $location.url("/basico/semestre/new");
    }

    function viewSemestre(Id) {
      $location.url("/basico/semestre/view/" + Id);
    }

    function editSemestre(Id) {
      $location.url("/basico/semestre/edit/" + Id);
    }

    function load() {
      getAllSemestres();
    }

    function buscar(busca) {
      if (busca) {
        $scope.getBySemestre(busca);
      } else {
        $scope.getAllSemestres();
      }
    }

    load();
  });
})();
