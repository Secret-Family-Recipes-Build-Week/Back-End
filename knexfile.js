module.exports = {
	development: {client: "sqlite3",
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
  //!!Don't understand this bit, or its necessary
	pool: {
		afterCreate: (conn, done) => {
			conn.run("PRAGMA foreign_keys = ON", done)
		},
  	},
	},
  //Production and testing here
  production: {
	client: "pg",
	// useNullAsDefault: true,
	connection: process.env.DATABASE_URL,
	migrations: {
	  directory: "./database/migrations",
	},
	seeds: {
	  directory: "./database/seeds",
	},
	},
	// testing: {
	//   client: 'sqlite3',
	//   connection: {
	// 	filename: './database/test.db3',
	//   },
	//   useNullAsDefault: true,
	//   migrations: {
	// 	directory: './database/migrations',
	//   },
	//   seeds: {
	// 	directory: './database/seeds',
	//   },
	//   pool: {
	// 	afterCreate: (conn, done) => {
	// 	  conn.run('PRAGMA foreign_keys = ON', done)
	// 	},
	//   },
	// },
}

// module.exports = {
// 	development: {
// 	  client: 'sqlite3',
// 	  useNullAsDefault: true,
// 	  connection: {
// 		filename: './database/data.db3',
// 	  },
// 	  pool: {
// 		afterCreate: (conn, done) => {
// 		  conn.run('PRAGMA foreign_keys = ON', done)
// 		},
// 	  },
// 	  migrations: {
// 		directory: './database/migrations',
// 	  },
// 	  seeds: {
// 		directory: './database/seeds',
// 	  },
// 	},
// 	production: {
// 	  client: "pg",
// 	  // useNullAsDefault: true,
// 	  connection: process.env.DATABASE_URL,
// 	  migrations: {
// 		directory: "./database/migrations",
// 	  },
// 	  seeds: {
// 		directory: "./database/seeds",
// 	  },
// 	  },
// 	  testing: {
// 		client: 'sqlite3',
// 		connection: {
// 		  filename: './database/test.db3',
// 		},
// 		useNullAsDefault: true,
// 		migrations: {
// 		  directory: './database/migrations',
// 		},
// 		seeds: {
// 		  directory: './database/seeds',
// 		},
// 		pool: {
// 		  afterCreate: (conn, done) => {
// 			conn.run('PRAGMA foreign_keys = ON', done)
// 		  },
// 		},
// 	  },
// 	}