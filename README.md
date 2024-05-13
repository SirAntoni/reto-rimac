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


### Body planeta Test (POST)

```

Body:
{
  "nombre": "Tatooine",
  "periodo_rotacion": "23", 
  "periodo_orbital": "304", 
  "diametro": "10465", 
  "clima": "arid", 
  "gravedad": "1 standard", 
  "terreno": "desert", 
  "perficie_agua": "1", 
  "poblacion": "200000", 
  "residentes": [
      "https://swapi.py4e.com/api/people/1/", 
      "https://swapi.py4e.com/api/people/2/", 
      "https://swapi.py4e.com/api/people/4/", 
      "https://swapi.py4e.com/api/people/6/", 
      "https://swapi.py4e.com/api/people/7/", 
      "https://swapi.py4e.com/api/people/8/", 
      "https://swapi.py4e.com/api/people/9/", 
      "https://swapi.py4e.com/api/people/11/", 
      "https://swapi.py4e.com/api/people/43/", 
      "https://swapi.py4e.com/api/people/62/"
  ], 
  "peliculas": [
      "https://swapi.py4e.com/api/films/1/", 
      "https://swapi.py4e.com/api/films/3/", 
      "https://swapi.py4e.com/api/films/4/", 
      "https://swapi.py4e.com/api/films/5/", 
      "https://swapi.py4e.com/api/films/6/"
  ], 
  "creado": "2014-12-09T13:50:49.641000Z", 
  "editedo": "2014-12-20T20:58:18.411000Z", 
  "url": "https://swapi.py4e.com/api/planets/1/"
}
```


