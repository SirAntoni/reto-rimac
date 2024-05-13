export interface varPlanet {    
    nombre?: string;    
    periodo_rotacion?: string;  
    periodo_orbital:string;
    diametro:string;
    clima: string;
    gravedad: string;
    terreno: string;
    superficie_agua: string;
    poblacion:string;
    residentes: Array;
    peliculas: Array;
    creado: string;
    editado: string;
    url: string;
}

export interface addPlanetResponse {    
    id?: string;  
}