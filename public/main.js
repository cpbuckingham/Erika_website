var app = angular.module( "myApp", [ 'ngRoute' ] );

app.config( function ( $routeProvider ) {
    $routeProvider.when( '/', {
            templateUrl: 'partials/home.html',
            controller: 'HeaderController'
        } )
        .when( '/contact', {
            templateUrl: '/partials/home.html',
            controller: 'ContactController'

        } );
} );

app.controller( 'HeaderController', function ( $scope, $http ) {
    $scope.view = {};
    $http.get( '/' ).then( function mySucces( response ) {
        console.log( "home page" );
    } );
} );

app.controller( 'ContactController', function ( $scope, $http ) {
    $scope.view = {};
    $http.get( '/contact' ).then( function mySucces( response ) {
        console.log( "contact page" );
    } );
} );
