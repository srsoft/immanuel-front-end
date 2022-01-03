#STEP 1 BUILD VUE PROJECT 1
FROM node:16.13.1-alpine AS build
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

#STEP 2 CREATE NGINX SERVER 2
FROM nginx:1.21.3-alpine AS prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]