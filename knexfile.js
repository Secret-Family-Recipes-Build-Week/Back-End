module.exports = {
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./database/recipeBuild.db3",
	},
	migrations: {
		directory: "./database/migrations",
	},
	seeds: {
		directory: "./database/seeds",
  },
  //Code that allows for foreign keys in knex
	pool: {
		afterCreate: (conn, done) => {
			conn.run("PRAGMA foreign_keys = ON", done)
		},
  },
  //Production and testing here
}