angular.module("moduloIndex")
	.controller("productoController",["$scope","$http",function(prod,$http){
		
		prod.product = [];
		prod.rProducto = {};
		prod.formVisibility = false;
		prod.numero = 2;

		//invisibilidad de la tabla
		prod.ShowForm = function(){
			prod.formVisibility=true;
			console.log(prod.formVisibility)
		}
	 
	    /*prod.consultaE = function(){
			prod.ShowForm()
			$http.get('http://jsonplaceholder.typicode.com/users/1')
			.then(function (response){
				console.log(response.data);
				prod.product = response.data;
			});
		}*/
		
		prod.Consultar = function(){
			prod.ShowForm()
			$http.get('https://jsonplaceholder.typicode.com/posts')
			.then(function(response){
				console.log(response.data);
				prod.product = response.data;
			});
		}
		
		prod.Registar = function(){
			prod.ShowForm()
		$http.post('http://jsonplaceholder.typicode.com/users',{
		idProducto:prod.rProducto.id, 
		nombreProducto:prod.rProducto.name, 
		presentacion:prod.rProducto.username, 
		cantidad:prod.rProducto.id,
		precio:prod.rProducto.id, usuarioIdenti:prod.rProducto.id
		})
		.then(function(response){
					console.log(response.data);/*este es para mirar 
					                  por consola si esta guardando 
					                  los datos*/
					prod.product.push(response.data);
					prod.rProducto={};
		});	
		
	}
}]);