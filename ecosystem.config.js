const { config } = require('dotenv');

config();

module.exports = {
  apps: [
    {
      name: 'booking-api',
      script: './dist/main.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        PORT: process.env.PORT || 3333,
      },
    },
  ],
};
