(function() {
  var service = angular.module("app");

  service.factory("salaService", function(
    $http,
    APIConfig,
    responseService
  ) {
    var defaultRoute = APIConfig.sysLiape + "/";

    return {
      getAll: function() {
        return $http
          .get(defaultRoute + "sala")
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getById: function(id) {
        return $http
          .get(defaultRoute + "sala/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getByNome: function(nome) {
        return $http
          .get(defaultRoute + "sala/" + nome)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      save: function(data) {
        return $http
          .post(defaultRoute + "sala", data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      update: function(id, data) {
        return $http
          .put(defaultRoute + "sala/" + id, data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      delete: function(id) {
        return $http
          .delete(defaultRoute + "sala/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      }
    };
  });
})();
