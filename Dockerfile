FROM node:20-alpine as production-stage

WORKDIR /app

COPY --from=build-stage ./ ./.output

CMD ["node", ".output/server/index.mjs"]

FROM nginx

COPY  ./nginx.conf /etc/nginx/nginx.conf

COPY  ./ssl /etc/nginx/ssl

EXPOSE 80


