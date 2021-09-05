FROM node:14.15.0-alpine

WORKDIR /frontend

COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "serve"]