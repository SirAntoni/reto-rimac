const AWS = require('aws-sdk');

const conexion = () => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    return dynamodb;
}

module.exports = { conexion }