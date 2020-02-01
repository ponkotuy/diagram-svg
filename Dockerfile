FROM node:12.14.1-slim

RUN apt-get update \
  && apt-get install -y git \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
RUN git clone https://github.com/ponkotuy/diagram-svg.git
WORKDIR /diagram-svg
RUN npm install
RUN npm run build
RUN git checkout gh-pages && git add -A && git ci -m "Commit gh-pages"
