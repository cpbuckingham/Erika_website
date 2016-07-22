// Update with your config settings.

module.exports = {

	development: {
		client: 'pg',
		connection: {
			database: 'ErikaAngarita'
		}
	},
	production: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL
	}
};
