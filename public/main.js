var app = angular.module( "myApp", [ 'ngRoute' ] );


app.config( function ( $routeProvider ) {
	$routeProvider.when( '/', {
			templateUrl: 'partials/home.html',
			controller: 'headerController'
		} )
		.when( '/about', {
			templateUrl: 'partials/about.html',
			controller: 'aboutController'
		} )
		.when( '/contact', {
			templateUrl: '/partials/contact.html',
			controller: 'contactController'
		} )
} );

app.controller( 'headerController', function ( $scope, $http ) {
	$scope.view = {};

	$http.get( '/' ).then( function mySucces( response ) {
		console.log( "home page" );
	} );
} );


app.controller( 'aboutController', function ( $scope, $http ) {
	$scope.view = {};
	$http.get( '/about' ).then( function mySucces( response ) {
		console.log( "about page" );
	} );

} );

app.controller( 'contactController', function ( $scope, $http ) {
	$scope.view = {};
	$http.get( '/contact' ).then( function mySucces( response ) {
		console.log( "contact page" );
	} );
} );
