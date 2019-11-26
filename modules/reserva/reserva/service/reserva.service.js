(function() {
  var service = angular.module("app");

  service.factory("reservaService", function($http, APIConfig, responseService) {
    var defaultRoute = APIConfig.sysLiape + "/";

    return {
      getAll: function() {
        return $http
          .get(defaultRoute + "reserva")
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getById: function(id) {
        return $http
          .get(defaultRoute + "reserva/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getBySala: function(sala) {
        return $http
          .get(defaultRoute + "reserva/" + sala)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      getDetalhes: function(idReserva) {
        return $http
          .get(defaultRoute + "reserva/detalhes/" + idReserva)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      save: function(data) {
        return $http
          .post(defaultRoute + "reserva", data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      associar: function(data) {
        return $http
          .post(defaultRoute + "reserva/associar", data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      update: function(id, data) {
        return $http
          .put(defaultRoute + "reserva/" + id, data)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      },

      delete: function(id) {
        return $http
          .delete(defaultRoute + "reserva/" + id)
          .then(responseService.doResponse)
          .catch(responseService.doError);
      }
    };
  });
})();
