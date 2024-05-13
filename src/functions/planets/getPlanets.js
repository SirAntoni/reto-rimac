const {conexion} = require('../../libs/db')
const responseJson = require('../../libs/response')
const TableName =require('../utils/constant')

const handler = async () => {
  try {
    const client = conexion();
    const result = await client.scan({ TableName }).promise()
    return responseJson(null, result.Items)
  } catch (err) {
    return responseJson(err)
  }
}

module.exports = {handler}