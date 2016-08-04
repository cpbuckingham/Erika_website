$( window ).load( function () {
    //
    $( "#preloader" ).fadeOut( "slow" );
} );

$( document ).ready( function () {
    console.log( "here" );
    $( ".button-collapse" ).sideNav();

    function hex_initial_animation() {
        $( ".hex-wrap,.hover-notify" ).velocity( "transition.expandIn", { stagger: 150 } );
        $( ".hex-wrap" ).velocity( "callout.pulse" );
        $( ".hoverblock" ).velocity( "fadeOut", { delay: 3000, duration: 0 } );
    }
    hex_initial_animation();

    var hoverdetect = setInterval( function () { hovernotify() }, 3000 );

    function hovernotify() {
        $( ".hover-notify" ).velocity( "callout.tada" );
    }

    function myStopFunction() {
        $( ".hover-notify" ).velocity( 'stop', true ).velocity( "fadeOut" );
        clearInterval( hoverdetect );
    }

    $( ".hex-init" ).mouseenter( function () {

        myStopFunction();

        var title_color = $( this ).parent().attr( "data-color" );
        var title_name = $( this ).parent().attr( "data-title" );
        var desc_name = $( this ).parent().attr( "data-content" );

        function hex_description() {
            $( '.code-description' ).velocity( 'stop', true ).velocity( "transition.slideRightBigIn" );
            $( '.' + desc_name ).siblings().removeClass( 'desc-active' );
            setTimeout( function () {
                $( '.' + desc_name ).addClass( 'desc-active' );
                $( '.code-descriptopn > div, .desc-active' ).children().velocity( 'stop', true ).velocity( "transition.slideRightBigIn", { stagger: 300 } );
                $( '.code-title, .desc-active span' ).velocity( { color: title_color }, { queue: false } );
                $( '.code-title' ).text( title_name )
            }, 0 );
        }
        hex_description();

        $( this ).parent().addClass( 'hexactive' );
        $( '.hexactive' ).velocity( { scaleX: "1.1", scaleY: "1.1" }, { duration: 200 } );

    } ).mouseleave( function () {
        $( '.hexactive' ).velocity( 'stop', true ).velocity( 'reverse' ).removeClass( 'hexactive' );
    } );
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
