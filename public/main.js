$( window ).load( function () {
    //
    $( "#preloader" ).fadeOut( "slow" );
} );

$( document ).ready( function () {
    console.log( "here" );
    $( ".button-collapse" ).sideNav();
} );


// $( document ).ready( function ( parallax ) {
$( window ).trigger( 'scroll' );
$( '#scene' ).load( function ( parallax ) {
    //         // naturalWidth: 600,
    //         // naturalHeight: 400
    $( '#scene' ).parallax( {
        calibrateX: false,
        calibrateY: true,
        invertX: false,
        invertY: true,
        limitX: false,
        limitY: 10,
        scalarX: 2,
        scalarY: 8,
        frictionX: 0.2,
        frictionY: 0.8,
        originX: 0.0,
        originY: 1.0
    } );
} );
