FROM node:8
ARG NODE_ENV=development
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ["package.json", "/usr/src/app/"]
COPY ["src", "/usr/src/app/src"]
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]