$( window ).load( function () {
    $( "#preloader" ).fadeOut( "slow" );
} );

$( document ).ready( function () {

    $( '.modal-trigger' ).leanModal();

    $( '.open-overlay' ).click( function () {
        $( '.open-overlay' ).css( 'pointer-events', 'none' );
        var overlay_navigation = $( '.overlay-navigation' ),
            top_bar = $( '.bar-top' ),
            middle_bar = $( '.bar-middle' ),
            bottom_bar = $( '.bar-bottom' );

        overlay_navigation.toggleClass( 'overlay-active' );
        if ( overlay_navigation.hasClass( 'overlay-active' ) ) {

            top_bar.removeClass( 'animate-out-top-bar' ).addClass( 'animate-top-bar' );
            middle_bar.removeClass( 'animate-out-middle-bar' ).addClass( 'animate-middle-bar' );
            bottom_bar.removeClass( 'animate-out-bottom-bar' ).addClass( 'animate-bottom-bar' );
            overlay_navigation.removeClass( 'overlay-slide-up' ).addClass( 'overlay-slide-down' )
            overlay_navigation.velocity( 'transition.slideLeftIn', {
                duration: 300,
                delay: 0,
                begin: function () {
                    $( 'nav ul li' ).velocity( 'transition.perspectiveLeftIn', {
                        stagger: 150,
                        delay: 0,
                        complete: function () {
                            $( 'nav ul li a' ).velocity( {
                                opacity: [ 1, 0 ],
                            }, {
                                delay: 10,
                                duration: 140
                            } );
                            $( '.open-overlay' ).css( 'pointer-events', 'auto' );
                        }
                    } )
                }
            } )

        } else {
            $( '.open-overlay' ).css( 'pointer-events', 'none' );
            top_bar.removeClass( 'animate-top-bar' ).addClass( 'animate-out-top-bar' );
            middle_bar.removeClass( 'animate-middle-bar' ).addClass( 'animate-out-middle-bar' );
            bottom_bar.removeClass( 'animate-bottom-bar' ).addClass( 'animate-out-bottom-bar' );
            overlay_navigation.removeClass( 'overlay-slide-down' ).addClass( 'overlay-slide-up' )
            $( 'nav ul li' ).velocity( 'transition.perspectiveRightOut', {
                stagger: 150,
                delay: 0,
                complete: function () {
                    overlay_navigation.velocity( 'transition.fadeOut', {
                        delay: 0,
                        duration: 300,
                        complete: function () {
                            $( 'nav ul li a' ).velocity( {
                                opacity: [ 0, 1 ],
                            }, {
                                delay: 0,
                                duration: 50
                            } );
                            $( '.open-overlay' ).css( 'pointer-events', 'auto' );
                        }
                    } );
                }
            } );
        }
    } );


    console.log( "here" );
    // $( ".button-collapse" ).sideNav();

    $( '[has-ripple="true"]' ).click( function () {
        $( this ).toggleClass( 'clicked' );
        $( '.menu' ).toggleClass( 'open' );
    } );

    $( '.menu a' ).each( function ( index ) {
        var thismenuItem = $( this );

        thismenuItem.click( function ( event ) {
            event.preventDefault();

            $( '.menuitem-wrapper' ).eq( index ).addClass( 'spin' );

            var timer = setTimeout( function () {
                $( 'body' ).removeAttr( 'class' ).addClass( 'bg-' + index );
                $( '.menuitem-wrapper' ).eq( index ).removeClass( 'spin' );
                $( '.menu' ).removeClass( 'open' );
                $( '.menu-btn' ).removeClass( 'clicked' );
            }, 800 );
        } );
    } );


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
