(function() {
  "use strict";
  var app = angular.module("app");

  var host = "localhost";

  app.constant("APIConfig", {
    sysLiape: "https://" + host + ":5001"
  });
})();
