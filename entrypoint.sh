#!/bin/bash

# Fetch secrets from AWS Secrets Manager and store them in .env file
# aws secretsmanager get-secret-value --secret-id your-secret-id --region your-region --output json | jq -r '.SecretString' > /usr/src/app/.env

# Start the app with PM2
. /usr/src/app/.env && pm2-runtime start ecosystem.config.js