// Update with your config settings.

module.exports = {

  development: {
    // client: 'pg',
    // connection: 'postgres://localhost/cjs-web-store'
    client: 'postgresql',
    connection: {
      database: 'cjs-web-store',
      user:     'vsemp',
      password: 'wsaqre13'
    },
  },

  test: {
    // client: 'pg',
    // connection: 'postgres://localhost/cjs-web-store'
    client: 'postgresql',
    connection: {
      database: 'test-cjs-web-store',
      user:     'vsemp',
      password: 'wsaqre13'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'cjs-web-store',
      user:     'vsemp',
      password: 'wsaqre13'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'cjs-web-store',
  //     user:     'vsemp',
  //     password: 'wsaqre13'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
