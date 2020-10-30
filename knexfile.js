// Update with your config settings.
const { pw } = require('./del_test');

module.exports = {

  development: {
    // client: 'pg',
    // connection: 'postgres://localhost/cjs-web-store'
    client: 'pg',
    connection: {
      database: 'cjs-web-store',
      user:     pw.user,
      password: pw.pass
    },
  },

  test: {
    // client: 'pg',
    // connection: 'postgres://localhost/cjs-web-store'
    client: 'postgresql',
    connection: {
      database: 'test-cjs-web-store',
      user:     pw.user,
      password: pw.pass
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'cjs-web-store',
      user:     pw.user,
      password: pw.pass
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
  //     user:     pw.user,
  //     password: pw.pass
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
