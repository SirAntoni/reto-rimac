const getFilmSwapi = require('../../src/functions/films/getFilmSwapi')
const { runParams } = require('./util')
const data = require('./film.json')

describe('film.getFilmSwapi', () => {
  beforeAll((done) => {
    done()
  })

  it('Película encontrada', async () => {
    const response = await runParams(getFilmSwapi, { id: 1 })
    expect(response.body).toEqual(data)
    expect(response.statusCode).toEqual(200)
  })

  it('Película no encontrada', async () => {
    const response = await runParams(getFilmSwapi, { id: 8888 })
    expect(response.body).toBeDefined()
    expect(response.statusCode).toEqual(404)
  })
})