(function() {
    "use strict";
  
    var app = angular.module("app");
  
    app.controller("perfilController", function(
      $scope,
      $location,
      $routeParams,
      perfilService
    ) {
      $scope.login = {
        id: undefined,
        Codigo: undefined,
        Nome: undefined,
        Login: undefined,
        Senha: undefined
      };
  
      $scope.update = update;
      $scope.cancel = cancel;
  
      function update(login) {
        perfilService
          .update($routeParams.id, login)
          .then(function(retorno) {
            alert("Registro alterado com sucesso!");
            cancel();
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
  
      function cancel() {
        $location.url("/basico/bloco");
      }
  
      function load() {
        perfilService
          .getByLogin($routeParams.id)
          .then(function(retorno) {
            $scope.login = angular.copy(retorno);
          })
          .catch(function(error) {
            console.log("erro: " + error);
          });
      }
  
      load();
    });
  })();
  