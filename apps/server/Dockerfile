FROM node:16

EXPOSE 4000

RUN mkdir /app
WORKDIR /app

COPY ./src ./src
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./yarn.lock ./yarn.lock

RUN npm install

ENTRYPOINT ["npm", "run", "start"]