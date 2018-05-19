angular.module("moduloIndex")
	.controller("proveedorController",["$scope","$http",function(prov,$http){

		prov.proveedor= [];
		prov.rProveedor = {};
		prov.formVisibility=false;

		/*invisibilidad de la tabla*/
		prov.ShowForm= function(){
			prov.formVisibility=true;
			console.log(prov.formVisibility)
		}

		prov.Consultar = function(){
			prov.ShowForm()
			$http.get('https://jsonplaceholder.typicode.com/posts')
			.then(function(response){
				console.log(response.data);
				prov.proveedor = response.data;

			});
		}
		
		prov.Registrar = function(){
		prov.ShowForm()
		$http.post('https://jsonplaceholder.typicode.com/posts',{
		idProveedor:prov.rProveedor.userId,
		nombreProveedor:prov.rProveedor.title,
		ccProveedor:prov.rProveedor.id
		})
		.then(function(response){
				console.log(response.data);
				prov.proveedor.push(response.data);
				prov.rProveedor= {};
		});
	}

	}]);
