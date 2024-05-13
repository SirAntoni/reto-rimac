// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "Reto Rimac",
    "version": "1",
    "description": "Reto Técnico encargado por Indra."
  },
  "paths": {
    "/": {
      "get": {
        "summary": "api",
        "description": "",
        "operationId": "api.get./",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/films/swapi/{id}": {
      "get": {
        "summary": "getFilmSwapi",
        "description": "",
        "operationId": "getFilmSwapi.get./films/swapi/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "201": {
            "description": "Devuelve resultado de la busqueda por id de SWApi",
            "schema": {
              "$ref": "#/definitions/getFilm"
            }
          },
          "404": {
            "description": "Devuelve un mensaje con le texto No se encontraron resultados",
            "schema": {
              "$ref": "#/definitions/response"
            }
          },
          "500": {
            "description": "Ocurrio un problema",
            "schema": {
              "$ref": "#/definitions/response"
            }
          }
        }
      }
    },
    "/films/swapi": {
      "get": {
        "summary": "getFilmsSwapi",
        "description": "",
        "operationId": "getFilmsSwapi.get./films/swapi",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "201": {
            "description": "Devuelve un array de objetos con los resultados de SWApi | films"
          },
          "500": {
            "description": "Ocurrio un problema",
            "schema": {
              "$ref": "#/definitions/response"
            }
          }
        }
      }
    },
    "/planets": {
      "post": {
        "summary": "addPlanet",
        "description": "",
        "operationId": "addPlanet.post./planets",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/varPlanet"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Devuelve el id del planeta agregado",
            "schema": {
              "$ref": "#/definitions/addPlanetResponse"
            }
          },
          "500": {
            "description": "Ocurrio un problema",
            "schema": {
              "$ref": "#/definitions/response"
            }
          }
        }
      },
      "get": {
        "summary": "getPlanets",
        "description": "",
        "operationId": "getPlanets.get./planets",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Devuelve un array de objetos con los resultados de la db planetas"
          },
          "500": {
            "description": "Ocurrio un problema",
            "schema": {
              "$ref": "#/definitions/response"
            }
          }
        }
      }
    },
    "/planets/{id}": {
      "get": {
        "summary": "getPlanet",
        "description": "",
        "operationId": "getPlanet.get./planets/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "201": {
            "description": "Devuelve resultado del planeta de Dynamodb",
            "schema": {
              "$ref": "#/definitions/varPlanet"
            }
          },
          "404": {
            "description": "Devuelve un mensaje con le texto No se encontraron resultados",
            "schema": {
              "$ref": "#/definitions/response"
            }
          },
          "500": {
            "description": "Ocurrio un problema",
            "schema": {
              "$ref": "#/definitions/response"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "varPlanet": {
      "properties": {
        "nombre": {
          "title": "varPlanet.nombre",
          "type": "string"
        },
        "periodo_rotacion": {
          "title": "varPlanet.periodo_rotacion",
          "type": "string"
        },
        "periodo_orbital": {
          "title": "varPlanet.periodo_orbital",
          "type": "string"
        },
        "diametro": {
          "title": "varPlanet.diametro",
          "type": "string"
        },
        "clima": {
          "title": "varPlanet.clima",
          "type": "string"
        },
        "gravedad": {
          "title": "varPlanet.gravedad",
          "type": "string"
        },
        "terreno": {
          "title": "varPlanet.terreno",
          "type": "string"
        },
        "superficie_agua": {
          "title": "varPlanet.superficie_agua",
          "type": "string"
        },
        "poblacion": {
          "title": "varPlanet.poblacion",
          "type": "string"
        },
        "residentes": {
          "items": {},
          "title": "varPlanet.residentes",
          "type": "array"
        },
        "peliculas": {
          "items": {},
          "title": "varPlanet.peliculas",
          "type": "array"
        },
        "creado": {
          "title": "varPlanet.creado",
          "type": "string"
        },
        "editado": {
          "title": "varPlanet.editado",
          "type": "string"
        },
        "url": {
          "title": "varPlanet.url",
          "type": "string"
        }
      },
      "required": [
        "periodo_orbital",
        "diametro",
        "clima",
        "gravedad",
        "terreno",
        "superficie_agua",
        "poblacion",
        "residentes",
        "peliculas",
        "creado",
        "editado",
        "url"
      ],
      "additionalProperties": false,
      "title": "varPlanet",
      "type": "object"
    },
    "addPlanetResponse": {
      "properties": {
        "id": {
          "title": "addPlanetResponse.id",
          "type": "string"
        }
      },
      "additionalProperties": false,
      "title": "addPlanetResponse",
      "type": "object"
    },
    "getFilm": {
      "properties": {
        "titulo": {
          "title": "getFilm.titulo",
          "type": "string"
        },
        "id_episodio": {
          "title": "getFilm.id_episodio",
          "type": "number"
        },
        "sinopsis_apertura": {
          "title": "getFilm.sinopsis_apertura",
          "type": "string"
        },
        "fecha_lanzamiento": {
          "title": "getFilm.fecha_lanzamiento",
          "type": "string"
        },
        "especies": {
          "items": {},
          "title": "getFilm.especies",
          "type": "array"
        },
        "naves": {
          "items": {},
          "title": "getFilm.naves",
          "type": "array"
        },
        "vehiculos": {
          "items": {},
          "title": "getFilm.vehiculos",
          "type": "array"
        },
        "personajes": {
          "items": {},
          "title": "getFilm.personajes",
          "type": "array"
        },
        "planetas": {
          "items": {},
          "title": "getFilm.planetas",
          "type": "array"
        },
        "url": {
          "title": "getFilm.url",
          "type": "string"
        },
        "creado": {
          "title": "getFilm.creado",
          "type": "string"
        },
        "editado": {
          "title": "getFilm.editado",
          "type": "string"
        }
      },
      "required": [
        "sinopsis_apertura",
        "fecha_lanzamiento",
        "especies",
        "naves",
        "vehiculos",
        "personajes",
        "planetas",
        "url",
        "creado",
        "editado"
      ],
      "additionalProperties": false,
      "title": "getFilm",
      "type": "object"
    },
    "response": {
      "properties": {
        "message": {
          "title": "response.message",
          "type": "string"
        }
      },
      "required": [
        "message"
      ],
      "additionalProperties": false,
      "title": "response",
      "type": "object"
    }
  },
  "securityDefinitions": {}
};