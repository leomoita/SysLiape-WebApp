(function() {
  var service = angular.module("app");

  service.factory("usuarioAdService", function($http, APIConfig, responseService) {
    var defaultRoute = APIConfig.sysLiape + "/";

    return {
      getAll: function() {
        return $http
          .get(defaultRoute + "usuarioAd")
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getById: function(id, tipo) {
        return $http
          .get(defaultRoute + "usuarioAd/" + id + "/" + tipo)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getByNome: function(nome) {
        return $http
          .get(defaultRoute + "usuarioAd/" + nome)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getByTipo: function(tipo) {
        return $http
          .get(defaultRoute + "usuarioAd/" + tipo)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      save: function(data) {
        return $http
          .post(defaultRoute + "usuarioAd", data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      update: function(id, data) {
        return $http
          .put(defaultRoute + "usuarioAd/" + id, data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      delete: function(id, tipo) {
        return $http
          .delete(defaultRoute + "usuarioAd/" + id + "/" + tipo)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      }
    };
  });
})();
