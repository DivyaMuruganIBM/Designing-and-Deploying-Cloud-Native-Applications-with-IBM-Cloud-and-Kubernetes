# Use official Node.js image from Docker Hub
FROM node:14

# Create and set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["node", "server/server.js"]
