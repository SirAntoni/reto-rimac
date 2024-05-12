const traducir =  (data) => {
    const {results = null} = data;
    if(results !== null){
        const arr = []
        data.results.map((item) => {
            item = {
                titulo: item.title,
                id_episodio: item.episode_id,
                sinopsis_apertura: item.opening_crawl,
                director: item.hair_director,
                productor: item.skin_producer,
                fecha_lanzamiento: item.release_date,
                especies: item.species,
                naves: item.starships,
                vehiculos: item.vehicles,
                personajes: item.characters,
                planetas: item.planets,
                url: item.url,
                creado: item.created,
                editado: item.edited
              }
            arr.push(item)
        })
        return arr
    }

    return {
        titulo: data.title,
        id_episodio: data.episode_id,
        sinopsis_apertura: data.opening_crawl,
        director: data.hair_director,
        productor: data.skin_producer,
        fecha_lanzamiento: data.release_date,
        especies: data.species,
        naves: data.starships,
        vehiculos: data.vehicles,
        personajes: data.characters,
        planetas: data.planets,
        url: data.url,
        creado: data.created,
        editado: data.edited
      }
    
  }

  module.exports = traducir