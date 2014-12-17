var eXoApp = angular.module('eXoApp',[]);

eXoApp.controller('ExoController', function($scope){


$scope.changeA1 = function(){
var A1XO = '';
$scope.A1XO = !$scope.A1XO;
}
});