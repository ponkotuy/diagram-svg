FROM node:12.14.1-slim

WORKDIR /app
COPY . .
CMD npm i && npm run build
