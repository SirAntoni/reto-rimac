# Reto Rimac - Indra

Prueba técnica NodeJS - DynamoDB - Serverless

## Scripts


## Instalar dependencias.

```
npm i
```
## Ejecutar en modo local y pruebas unitarias.

Modo local (serverless-offline):
```
npm run dev
```

Pruebas unitarias:
```
npm run test
```

## Despliegue Serverless.

```
npm run deploy
```

## Documentación de EndPoints

Endpoints del proyecto para su uso.

| PETICIÓN HTTP | PATH | DESCRIPCIÓN |
| ------ | ------ | ------ |
| GET | /films/swapi/{id} | Obtener película usando swapi |
| GET | /films/swapi | Obtener peliculas usando swapi |
| GET | /planets | Obtener lista de planetas |
| GET | /planets/{id} | Obtener lista un planet segun id |
| POST | /planets | Registrar un planeta |


