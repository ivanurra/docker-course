# Dependencias de Desarrollo
FROM node:19.2-alpine3.16 as deps
# cd app
WORKDIR /app
# Copianmos el package.json en /app
COPY package.json ./
# Instalar dependencias
RUN npm install

# Build y Tests
FROM node:19.2-alpine3.16 as builder
# cd app
WORKDIR /app
# Copiamos los módulos de node
COPY --from=deps /app/node_modules ./node_modules
# Copiamos todo el código fuente en /app
COPY . .
# Destino /app
RUN npm run test

# Dependencias de Producción
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
# Copianmos el package.json en /app
COPY package.json ./
RUN npm install --prod

# Ejecutar la APP
FROM node:19.2-alpine3.16 as runner
# cd app
WORKDIR /app
# Copiamos los módulos de node
COPY --from=prod-deps /app/node_modules ./node_modules
# Copiamos los archivos
COPY app.js ./
COPY tasks/ ./tasks
# Comando run de la app
CMD [ "node", "app.js" ]
