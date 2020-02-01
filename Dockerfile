FROM node:12.14.1-slim

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
