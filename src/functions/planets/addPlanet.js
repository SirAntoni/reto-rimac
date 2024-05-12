const {conexion} = require('../../libs/db')
const responseJson = require('../../libs/response')
const {v4} = require('uuid')
const TableName = require('../utils/constant')

const addPlanet = async (event) => {
  try {
    const client = conexion()
    const id = v4()
    const data = JSON.parse(event.body)

    data.id = id

    await client.put({
      TableName,
      Item: data
    }).promise()

    return responseJson(null, { id }, 201)

  } catch (err) {
    return responseJson(err)
  }
}

module.exports = {addPlanet}