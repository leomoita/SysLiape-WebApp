(function() {
  var service = angular.module("app");

  service.factory("homeService", function($http, APIConfig, responseService) {
    var defaultRoute = APIConfig.sysLiape + "/";

    return {
      getAll: function() {
        return $http
          .get(defaultRoute + "home")
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },
      getbynome: function(nome) {
        return $http
          .get(defaultRoute + "home/" + nome)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },
    };
  });
})();
