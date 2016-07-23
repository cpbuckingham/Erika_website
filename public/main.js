var app = angular.module( "myApp", [ 'ngRoute' ] );


app.config( function ( $routeProvider ) {
  $routeProvider.when( '/', {
			templateUrl: 'partials/home.html',
			controller: 'headerController';
} )
.when( '/contact', {
  templateUrl: '/partials/home.html',
			controller: 'contactController';
} )
} );

app.controller( 'headerController', function ( $scope, $http ) {
  $scope.view = {
};

	$http.get( '/' )
		.then( function mySucces( response ) {
  console.log( "home page" );
} );
} );

app.controller( 'contactController', function ( $scope, $http ) {
  $scope.view = {
};
	$http.get( '/contact' )
		.then( function mySucces( response ) {
  console.log( "contact page" );
} )
} )
