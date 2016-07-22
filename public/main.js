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

app.controller( 'headerController', function ( $scope ) {
	$scope.view = {};


	// parallax section
	// $( document ).ready( function () {
	// 	$( window ).trigger( 'scroll' );
	// 	$( '.parallax-window' ).load( function ( parallax ) {
	// 		naturalWidth: 600,
	// 		naturalHeight: 400
	// 	} );
	// } );
	//
	//
	// $( document ).ready( function () {
	// 	$( ".button-collapse" ).sideNav();
	// } );
} );


app.controller( 'aboutController', function ( $scope ) {
	$scope.view = {};
} );

app.controller( 'contactController', function ( $scope ) {
	$scope.view = {};
} );
