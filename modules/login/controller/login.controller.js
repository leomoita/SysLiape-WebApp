angular.module("app").controller("loginController", function ($scope, $location, loginService ) {      
  
    $scope.getAlllogins = function () {
      var busca = $scope.busca;
          loginService.getAll(busca).then(function (response) {
            
          if(response.data == "")     
            alert("teste") ;
          else
            $scope.nome = response.data.nome;        
                    
      });
  }
});