var app = angular.module( "myApp", [ 'ngRoute' ] );
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


app.controller( 'aboutController', function ( $scope ) {
	$scope.view = {};
	$http.get( '/about' ).then( function mySucces( response ) {
		console.log( "about page" );
	} );

} );

app.controller( 'contactController', function ( $scope ) {
	$scope.view = {};
	$http.get( '/contact' ).then( function mySucces( response ) {
		console.log( "contact page" );
	} );
} );
