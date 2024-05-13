const getFilmSwapi = require('../../src/functions/films/getFilmsSwapi')
const { runParams } = require('../util')
const data = require('./film.json')

describe('film.getFilmsSwapi', () => {
  beforeAll((done) => {
    done()
  })

  it('Datos encontrados', async () => {
    const response = await runParams(getFilmSwapi)
    expect(response.statusCode).toEqual(200)
  })
  
})