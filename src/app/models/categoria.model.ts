<<<<<<< HEAD
export class Categoria{
    constructor(
      public _id: string,
      public nombre_categoria:string,
      public n_equipos_categoria:number,
      public observacion_categoria:string,
      public id_temporada:string,      
      public segunda_vuelta:string,
      public codigo_equipo:[string],      
    ){}
  }
=======
export class Categoria {
    constructor(
        public nombre_categoria: string,
        public n_equipos_categoria: number,
        public observacion_categoria: string,
        public id_temporada: string,
        public segunda_vuelta: boolean,
        public codigo_equipo: [ string ]

    ) { }
}
>>>>>>> e31b486b5079eb01f3791c9c35ea67795424eecb
