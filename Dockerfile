FROM node:14.20.1-alpine as build
WORKDIR /app

RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build


FROM nginx:latest
COPY --from=build ./app/dist/short-url /usr/share/nginx/html
COPY --from=build ./app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80