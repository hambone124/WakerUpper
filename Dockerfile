FROM node:alpine
RUN apk add --no-cache libstdc++ 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]