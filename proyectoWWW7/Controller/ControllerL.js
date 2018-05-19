angular.module("moduloIndex")
    .controller("controLogin",function($scope,$http,$resource){

    	$scope.permiso = "Admin";
    	$scope.url = "";

    	$scope.DarPermiso = function(){

            if($scope.permiso == "Admin"){

		    	$scope.url = "config";
		    	
		    }if($scope.permiso == "Analista"){
		    	
		    	$scope.url = "registrarProducto";

		    }if($scope.permiso == "Vendedor"){
		    	
		    	$scope.url = "Vendedor";

		    }
    	}

    });