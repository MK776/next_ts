FROM node:14.17.0
WORKDIR /nextjs-blog
RUN npm install
WORKDIR /usr/src/app