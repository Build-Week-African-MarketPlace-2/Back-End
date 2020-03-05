// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/market.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },
    // add the following
    
      testing: {
        client: 'sqlite3',
        connection: {
          filename: './data/test.db3',
        },
        useNullAsDefault: true,
        migrations: {
          directory: './data/migrations',
        },
        seeds: {
          directory: './data/seeds',
        },
      },
    };
