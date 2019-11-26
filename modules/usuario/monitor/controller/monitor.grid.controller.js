(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("monitorGridController", function(
    $scope,
    $location,
    $route,
    monitorService
  ) {
    $scope.monitores = [];

    $scope.monitor = {
      Id: undefined,
      Nome: undefined,
      Admin: undefined
    };

    $scope.getAllMonitores = getAllMonitores;
    $scope.getByMonitor = getByMonitor;
    $scope.deleteMonitor = deleteMonitor;
    $scope.newMonitor = newMonitor;
    $scope.editMonitor = editMonitor;
    $scope.viewMonitor = viewMonitor;

    $scope.buscar = buscar;

    function getAllMonitores() {
      monitorService
        .getAll()
        .then(function(retorno) {
          $scope.monitores = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function getByMonitor(nome) {
      monitorService
        .getByNome(nome)
        .then(function(retorno) {
          $scope.monitores = angular.copy(retorno);
        })
        .catch(function(error) {
          console.log("erro: " + error);
        });
    }

    function deleteMonitor(Id) {
      var r = confirm("Deseja mesmo deletar o registro?");
      if (r == true) {
        monitorService
          .delete(Id)
          .then(function() {
            alert("Monitor deletado com sucesso!");
            $route.reload();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
    }

    function newMonitor() {
      $location.url("/usuario/monitor/new");
    }

    function viewMonitor(Id) {
      $location.url("/usuario/monitor/view/" + Id);
    }

    function editMonitor(Id) {
      $location.url("/usuario/monitor/edit/" + Id);
    }

    function load() {
      getAllMonitores();
    }

    function buscar(busca) {
      if (busca) {
        $scope.getByMonitor(busca);
      } else {
        $scope.getAllMonitores();
      }
    }

    load();
  });
})();
