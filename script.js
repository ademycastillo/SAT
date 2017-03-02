var ademy= angular.module("ademy",[]);
ademy.controller("operaciones",function ($scope){
	$scope.precio = 100;
	$scope.iva = 0.12;
	$scope.precio = $scope.precio;
	$scope.precio = $scope.precio*$scope.iva;
})