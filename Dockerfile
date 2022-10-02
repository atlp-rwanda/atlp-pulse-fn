# Using node:16-alpine base image
FROM node:16-alpine 

# Set the default work directory
WORKDIR /usr/src/app

# copy package.json to the working directory for packages installation
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy all the project files to the working directory
COPY . .

# Build your project
RUN npm run build

# Expose the port of your application to bind with the host port
EXPOSE 3000

# run your app
CMD ["node", "dist/index.js"]