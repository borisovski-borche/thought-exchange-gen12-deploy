# This tells docker the base image for this build
FROM node:20

WORKDIR /usr/local/app

COPY ./ /usr/local/app

RUN npm install

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000