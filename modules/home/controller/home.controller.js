(function() {
   "use strict";
 
   var app = angular.module("app");
 
   app.controller("homeController", function(
     $scope,
     $location,
     $route,
     homeService
   ) {
     $scope.homes = [];
 
     $scope.homes = {
       Id: undefined,
       Sala: undefined,
       Bloco: undefined,
       Professor: undefined,
       Horario: undefined,
     };
 
     $scope.getAllHomes = getAllHomes;
     $scope.getByHome = getByHome;
     $scope.buscar = buscar;
 
     function getAllHomes() {
      homeService
         .getAll()
         .then(function(retorno) {
           $scope.homes = angular.copy(retorno);
         })
         .catch(function(error) {
           console.log("erro: " + error);
         });
     }
 
     function getByHome(nome) {
      homeService
         .getbynome(nome)
         .then(function(retorno) {
           $scope.homes = angular.copy(retorno);
         })
         .catch(function(error) {
           console.log("erro: " + error);
         });
     }
 
     function load() {
      getAllHomes();
     }
 
     function buscar(busca) {
       if (busca) {
         $scope.getByHome(busca);
       } else {
         $scope.getAllHomes();
       }
     }
 
     load();
   });
 })();
 