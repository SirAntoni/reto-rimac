export interface getFilm {    
    titulo?: string;
    id_episodio?:  number;
    sinopsis_apertura: string;
    fecha_lanzamiento: string;
    especies: Array;
    naves: Array;
    vehiculos: Array;
    personajes: Array;
    planetas: Array;
    url: string;
    creado: string;
    editado: string;
}

export interface response {
    message: string
}