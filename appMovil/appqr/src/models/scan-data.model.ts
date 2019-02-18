

export class ScanData{

  info:string;
  tipo:string;

  constructor( texto:string ){

    this.tipo = "no definido";
    this.info = texto;
    //Modelo para seleccion de tipo de informacion escaneada
    //SI es un tipo recurso http
    if( texto.startsWith("http") ){
      this.tipo = "http";
    //SI es un tipo recurso json-de celula cultural
    }else if (texto.startsWith("[{")){
      this.tipo = "célula cultural";
    }


  }

}
