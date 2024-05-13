const responseJson = require('../../libs/response')
const CustomError = require('../../libs/error')
const traducir = require('../utils/traducir')

const getFilmSwapi = async (event) => {
  try {
    const { id } = event.pathParameters
    const api = await fetch(`https://swapi.py4e.com/api/films/${id}`)
    const data = await api.json()
console.log(Object.keys(data).length)
    if(Object.keys(data).length === 1) throw new CustomError('No se encontraron resultados',404)

    const traduccion = traducir(data)
    return responseJson(null, traduccion)
  } catch (err) {
    return responseJson(err)
  }
}

module.exports = {getFilmSwapi}