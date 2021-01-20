FROM node:14

# create app directory
WORKDIR /usr/src/app

# install app dependencies
# a wildcard is used to ensure both package.json and package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# if you're building code for prod
# RUN npm ci --only=production

# bundle app source
COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]