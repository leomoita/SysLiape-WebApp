(function() {
    var service = angular.module("app");
  
    service.factory("perfilService", function($http, APIConfig, responseService) {
      var defaultRoute = APIConfig.sysLiape + "/";
  
      return {
        getByLogin: function(nome) {
          return $http
            .get(defaultRoute + "perfil/" + nome)
            .then(responseService.doResponse)
            .catch(responseService.doError);
        },
        update: function(id, data) {
            return $http
              .put(defaultRoute + "perfil/" + id, data)
              .then(responseService.doResponse)
              .catch(responseService.doError);
          },
      };
    });
  })();
  