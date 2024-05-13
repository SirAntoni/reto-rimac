const { conexion } = require('../../libs/db')
const responseJson = require('../../libs/response')
const TableName = require('../utils/constant')

const handler = async (event) => {
  try {

    const { id } = event.pathParameters
    const client = conexion();
    const result = await client.get({ TableName, Key: { id } }).promise()
    return responseJson(null, result.Item)
  } catch (err) {
    return responseJson(err)
  }
}

module.exports = { handler }