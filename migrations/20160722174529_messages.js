exports.up = function ( knex, Promise ) {
	return knex.schema.createTable( "messages", function ( table ) {
		table.increments( 'id' ).primary();
		table.string( "name" );
		table.string( "email" );
		table.text( "comments" );

	} );
};

exports.down = function ( knex, Promise ) {
	return knex.schema.dropTable( "messages" )

};
