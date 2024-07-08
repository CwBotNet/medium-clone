FROM node:22-alpine

WORKDIR /user/src/app

COPY package* .

RUN npm install

COPY  . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
