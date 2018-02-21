var app = angular.module('faqApp', ['ngRoute','firebase']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller 	: 'mainController'
		})
		.when('/faq', {
			templateUrl : 'views/faq.html',
			controller 	: 'faqController'
		})
		.when('/mantenedor', {
			templateUrl : 'views/mantenedor.html',
			controller 	: 'contactController'
		});
});

app.controller('mainController', function ($scope){
	$scope.message = 'Todos vienen y miran lo bien que luzco'; 

  // $scope.messages = $firebaseArray(ref);
});
app.controller('faqController', function ($scope, $firebaseObject){
	var ref = new Firebase("https://vivid-heat-39.firebaseio.com/faq");
	var ref2 = new Firebase("https://vivid-heat-39.firebaseio.com/categorias");

		  var syncObject = $firebaseObject(ref);
		  var syncObject2 = $firebaseObject(ref2);
		  // synchronize the object with a three-way data binding
		  // click on `index.html` above to see it used in the DOM!
		  syncObject.$bindTo($scope, "preguntas");
		  syncObject2.$bindTo($scope, "categorias");
		  console.log(syncObject,syncObject);


	$scope.mostrado = function(){
		console.log('Esta funcion  funciona');
	}

	// $scope.message = 'Mira! Soy una página sobre mi';
	// $scope.categoria=[
	// 	{
	// 		id:1,
	// 		nombre:'General'
	// 	},
	// 	{
	// 		id:2,
	// 		nombre:'Productos'
	// 	},
	// 	{
	// 		id:3,
	// 		nombre:'Inventario'
	// 	},
	// 	{
	// 		id:4,
	// 		nombre:'Personal'
	// 	},
	// 	{
	// 		id:5,
	// 		nombre:'Clientes'
	// 	},
	// 	{
	// 		id:6,
	// 		nombre:'Turnos'
	// 	},
	// ]
	// $scope.faq = {
	// 	preguntas: [
	// 		{
	// 			id:1,
	// 			pregunta:'¿Cómo puedo saber si el dron está funcionando?',
	// 			respuesta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			categoria:'general',
	// 			votosi:23,
	// 			votono:12,
	// 			perfiles:['Administrador','Cajero']
	// 		},
	// 		{
	// 			id:2,
	// 			pregunta:'¿Cómo instalo una impresora fiscal?',
	// 			respuesta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			categoria:'general',
	// 			votosi:23,
	// 			votono:12,
	// 			perfiles:['Administrador','Cajero']
	// 		},
	// 		{
	// 			id:3,
	// 			pregunta:'¿Cómo puedo separar mesas?',
	// 			respuesta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			categoria:'general',
	// 			votosi:23,
	// 			votono:12,
	// 			perfiles:['Todos']
	// 		},
	// 		{
	// 			id:4,
	// 			pregunta:'¿Cómo puedo buscar un cliente?',
	// 			respuesta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			categoria:'clientes',
	// 			votosi:23,
	// 			votono:12,
	// 			perfiles:['Todos']
	// 		},
	// 		{
	// 			id:5,
	// 			pregunta:'¿Por qué el drone no funciona?',
	// 			respuesta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			categoria:'general',
	// 			votosi:23,
	// 			votono:12,
	// 			perfiles:['Todos']
	// 		},
	// 		{
	// 			id:6,
	// 			pregunta:'¿Qué es Toteat?',
	// 			respuesta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			categoria:'general',
	// 			votosi:23,
	// 			votono:12,
	// 			perfiles:['Todos']
	// 		},
	// 		{
	// 			id:7,
	// 			pregunta:'¿Cómo inicio sesión?',
	// 			respuesta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			categoria:'general',
	// 			votosi:23,
	// 			votono:12,
	// 			perfiles:['Todos']
	// 		}
	// 	],

		// 	{
		// 		pregunta: 'sadasda?'
		// 	},
		// 	{
		// 		pregunta: 'otra1?'
		// 	},
		// 	{
		// 		pregunta: 'otra2?'
		// 	},
		// 	{
		// 		pregunta: 'otra3?'
		// 	}
		// },
		// general: { p:'¿Qué es Toteat?', r:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		// 		},
		// personal: { p:'¿Cómo inicio sesión?', r:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		// 		},
		// {
		// 	{
		// 		pregunta: 'sadasda?'
		// 	},
		// 	{
		// 		pregunta: 'otra1?'
		// 	},
		// 	{
		// 		pregunta: 'otra2?'
		// 	},
		// 	{
		// 		pregunta: 'otra3?'
		// 	}
		// }
	// 	turnos: { p:'', r:'No hemos encontrado lo que has buscado, pero puedes hacer tu pregunta y te responderemos a la brevedad'},
	// 	delivery: { p:'¿Lorem ipsum dolor sit amet?', r:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			},
	// 	inventario: { p:'¿Lorem ipsum dolor sit amet?', r:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			},
	// 	clientes: { p:'¿Lorem ipsum dolor sit amet?', r:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			},
	// 	productos: { p:'¿Lorem ipsum dolor sit amet?', r:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	// 			}
	// };

});
app.controller('contactController', function ($scope){
	$scope.message = 'Contáctanos! JK. Este es un demo.';
});