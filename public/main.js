var app = angular.module( 'myApp', [ 'ngRoute' ] );

app.config( function ( $routeProvider ) {
    $routeProvider.when( '/', {
        templateUrl: 'partials/home.html',
        controller: 'HeaderController'

    } );
} );

app.controller( 'HeaderController', function ( $scope, $http ) {
    // $scope.view = {};
    $http.get( '/' ).then( function mySucces( response ) {
        console.log( "home page" );
    } );
} );
