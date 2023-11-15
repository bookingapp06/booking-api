# Use an official Node.js runtime as a base image
FROM node:20.9.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Install AWS CLI
RUN apt-get update && \
    apt-get install -y awscli

# Install PM2 globally
RUN npm install -g pm2

# Copy all files to the working directory
COPY . .

# Setting the .env file
RUN printenv > .env

# Install dependencies and build the application
RUN npm install && npm run build

# Expose the port that your app will run on (adjust based on your application's needs)
EXPOSE 3333

# Use pm2-runtime to start the Nest.js application in production
# CMD ["pm2-runtime", "start", "ecosystem.config.js"]

CMD ["sh", "-c", "sh ./entrypoint.sh"]