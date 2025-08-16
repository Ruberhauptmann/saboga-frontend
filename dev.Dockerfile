FROM node:20-alpine
WORKDIR /app
COPY package-lock.json ./
COPY package.json ./
RUN npm i

COPY ./ ./

CMD npm run dev -- --host
