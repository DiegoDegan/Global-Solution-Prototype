# Usa uma imagem node oficial para build
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

# Usa um servidor http estático, como o 'serve' ou 'http-server'
FROM node:20-slim

WORKDIR /usr/src/app

# Instala o 'serve' para servir arquivos estáticos
RUN npm install -g serve

# Copia os arquivos gerados no build
COPY --from=build /app/dist ./dist

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]
