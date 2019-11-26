(function() {
  var service = angular.module("app");

  service.factory("semestreService", function(
    $http,
    APIConfig,
    responseService
  ) {
    var defaultRoute = APIConfig.sysLiape + "/";

    return {
      getAll: function() {
        return $http
          .get(defaultRoute + "semestre")
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getById: function(id) {
        return $http
          .get(defaultRoute + "semestre/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getByData: function(data) {
        return $http
          .get(defaultRoute + "semestre/" + data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      save: function(data) {
        return $http
          .post(defaultRoute + "semestre", data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      update: function(id, data) {
        return $http
          .put(defaultRoute + "semestre/" + id, data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      delete: function(id) {
        return $http
          .delete(defaultRoute + "semestre/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      }
    };
  });
})();
