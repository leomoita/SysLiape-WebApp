(function() {
  var service = angular.module("app");

  service.factory("blocoService", function(
    $http,
    APIConfig,
    responseService
  ) {
    var defaultRoute = APIConfig.sysLiape + "/";

    return {
      getAll: function() {
        return $http
          .get(defaultRoute + "bloco")
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getById: function(id) {
        return $http
          .get(defaultRoute + "bloco/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getByNome: function(nome) {
        return $http
          .get(defaultRoute + "bloco/" + nome)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      save: function(data) {
        return $http
          .post(defaultRoute + "bloco", data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      update: function(id, data) {
        return $http
          .put(defaultRoute + "bloco/" + id, data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      delete: function(id) {
        return $http
          .delete(defaultRoute + "bloco/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      }
    };
  });
})();
