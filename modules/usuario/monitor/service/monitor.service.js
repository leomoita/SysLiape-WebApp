(function() {
  var service = angular.module("app");

  service.factory("monitorService", function($http, APIConfig, responseService) {
    var defaultRoute = APIConfig.sysLiape + "/";

    return {
      getAll: function() {
        return $http
          .get(defaultRoute + "monitor")
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getById: function(id) {
        return $http
          .get(defaultRoute + "monitor/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getByNome: function(nome) {
        return $http
          .get(defaultRoute + "monitor/" + nome)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      save: function(data) {
        return $http
          .post(defaultRoute + "monitor", data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      update: function(id, data) {
        return $http
          .put(defaultRoute + "monitor/" + id, data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      delete: function(id) {
        return $http
          .delete(defaultRoute + "monitor/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      }
    };
  });
})();
