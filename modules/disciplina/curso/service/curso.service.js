(function() {
  var service = angular.module("app");

  service.factory("cursoService", function($http, APIConfig, responseService) {
    var defaultRoute = APIConfig.sysLiape + "/";

    return {
      getAll: function() {
        return $http
          .get(defaultRoute + "curso")
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getById: function(id) {
        return $http
          .get(defaultRoute + "curso/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getByNome: function(nome) {
        return $http
          .get(defaultRoute + "curso/" + nome)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      save: function(data) {
        return $http
          .post(defaultRoute + "curso", data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      update: function(id, data) {
        return $http
          .put(defaultRoute + "curso/" + id, data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      delete: function(id) {
        return $http
          .delete(defaultRoute + "curso/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      }
    };
  });
})();
