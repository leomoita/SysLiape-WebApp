(function() {
  var service = angular.module("app");

  service.factory("loginService", function($http, APIConfig, responseService) {
    var defaultRoute = APIConfig.sysLiape + "/";

    return {
      getAll: function() {
        return $http
          .get(defaultRoute + "login")
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getbyid: function(id) {
        return $http
          .get(defaultRoute + "login/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getbynome: function(nome) {
        return $http
          .get(defaultRoute + "login/" + nome)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      save: function(data) {
        return $http
          .post(defaultRoute + "login", data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      update: function(id, data) {
        return $http
          .put(defaultRoute + "login/" + id, data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      delete: function(id) {
        return $http
          .delete(defaultRoute + "login/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      }
    };
  });
})();
