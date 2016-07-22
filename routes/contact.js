var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );



router.get( '/', function ( req, res ) {
	// knex( 'ErikaAngarita' ).select().then( function ( result, err ) {
	res.render( 'contact' );
	// } );
} );



module.exports = router;
