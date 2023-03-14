FROM node

WORKDIR /Users/williamroger/courses/rocketseat/ignite/node/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

