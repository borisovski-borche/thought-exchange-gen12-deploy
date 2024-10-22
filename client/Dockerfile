# Step 1: Install dependencies and build output files
FROM node:20 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app

RUN npm install

RUN npm run build
# Step 2: Serve static files with nginx
FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/local/app/dist/client/browser /usr/share/nginx/html



EXPOSE 80