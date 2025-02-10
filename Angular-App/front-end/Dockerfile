FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN  npm install && npm install -g @angular/cli && ng build --configuration production

FROM nginx:alpine

COPY --from=build /app/dist/my-angular-app/browser/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/sites-available/default

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

