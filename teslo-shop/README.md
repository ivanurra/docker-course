# Teslo API

1. Clonar proyecto
2. ```yarn install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-compose up -d
```

6. Levantar: ```yarn start:dev```

7. Ejecutar SEED 
```
http://localhost:3000/api/seed
```

### Production notes:

```
docker compose -f docker.compose.prod.yml build
```

```
docker buildx build \
--platform linux/amd64,linux/arm64 \
-t ivanurra/teslo-shop:1.1.0 --push .
```



