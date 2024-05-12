const responseJson = require('../../libs/response')
const traducir = require('../utils/traducir')

const getFilmsSwapi = async (event) => {
  try {
    const api = await fetch(`https://swapi.py4e.com/api/films`)
    const data = await api.json()
    const traduccion = traducir(data)
    return responseJson(null, traduccion)
  } catch (err) {
    return responseJson(err)
  }
}

module.exports = {getFilmsSwapi}