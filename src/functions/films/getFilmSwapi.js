const responseJson = require('../../libs/response')
const traducir = require('../utils/traducir')

const getFilmSwapi = async (event) => {
  try {
    const { id } = event.pathParameters
    const api = await fetch(`https://swapi.py4e.com/api/films/${id}`)
    const data = await api.json()
    const traduccion = traducir(data)
    return responseJson(null, traduccion)
  } catch (err) {
    return responseJson(err)
  }
}

module.exports = {getFilmSwapi}