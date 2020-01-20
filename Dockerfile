FROM node:13.5.0

# Create working location
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]
