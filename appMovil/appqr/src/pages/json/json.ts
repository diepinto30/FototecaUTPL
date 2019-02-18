import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-json',
  templateUrl: 'json.html'
})
export class JsonPage {

public nombre: string;
public ciudad: string;
public pais: string;
public direccion:string;
public descripcion: string;
public foto: any;

  constructor( public navParams: NavParams,
               private viewCtrl: ViewController ) {
    //Obtencion de datajson
    let datajson = this.navParams.get("json");
    //console.log( datajson );
    //Cambiar data a Json
    let dt = JSON.parse(datajson);
    //Descomposicion de partes requeridas de json
    this.nombre = dt[0]["fields"]["nombre"]
    this.ciudad = dt[0]["fields"]["ciudad"]
    this.pais = dt[0]["fields"]["pais"]
    this.direccion = dt[0]["fields"]["direccion"]
    this.descripcion = dt[0]["fields"]["descripcion"]
    this.foto = dt[0]["fields"]["foto"]
    //alert(dt[0]["pk"]["nombre"]);
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

}
