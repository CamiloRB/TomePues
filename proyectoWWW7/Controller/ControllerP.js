angular.module("moduloIndex")
    .controller("contro",function($scope,$http,$resource){
    	
    	$scope.numero = 0;
    	$scope.compraa = {};
    	$scope.nuevacompraa = {};
        $scope.nuevocomenta = {};
        $scope.comenta = [];

        $scope.comentanuevo = function(){
            $scope.comenta.push($scope.nuevocomenta);
            $scope.nuevocomenta = {};
        }

    	$http.get("https://jsonplaceholder.typicode.com/posts")
    		.then(function(response){
    			console.log(response);
    			$scope.compraa = response.data;
    	});

    	$scope.addPost = function(){ 
            $http.post("http://jsonplaceholder.typicode.com/posts",{
                        userId: '10',
                        title: $scope.nuevacompraa.title,
                        body: $scope.nuevacompraa.body
                        })
                .then(function(response){
                    $scope.compraa.push(response.data);
                    $scope.nuevacompraa={}; 
                    
                },function (error){
            })
        }

        $scope.editar = function(){ 
            $http.put("http://jsonplaceholder.typicode.com/posts/" + $scope.numero,{
                        userId: '10',
                        title: $scope.nuevacompraa.title,
                        body: $scope.nuevacompraa.body
                        })
                .then(function(response){
                    $scope.compraa.push(response.data);
                    $scope.nuevacompraa={}; 
                    
                },function (error){
            })
        }

    });