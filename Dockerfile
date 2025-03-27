FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ ./
RUN npm run build


FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder --chown=nginx /app/dist /usr/share/nginx/html/
