import { Injectable } from '@angular/core';
import { ScanData } from "../models/scan-data.model";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController, Platform, ToastController } from "ionic-angular";
import { JsonPage } from "../pages/json/json";

@Injectable()
export class HistorialService {
  private _historial:ScanData[] = [];

  constructor( private iab: InAppBrowser,
               private modalCtrl: ModalController,
               private platform:Platform,
               private toastCtrl:ToastController) { }

  //Funcion que agrega cada escaner a la lista
  agregar_historial( texto:string ){
    let data = new ScanData( texto );
    this._historial.unshift( data );
    console.log( this._historial );
    this.abrir_scan(0);
  }

// Funcion que permite que el escaner se abra y crea un modal
  abrir_scan( index:number){
    let scanData = this._historial[index];
    console.log( scanData );
    this.modalCtrl.create(JsonPage, {json: scanData.info}).present();

  /*  switch( scanData.tipo ){
      case "http":
        this.iab.create( scanData.info, "_system" );
      break;
      case "datosjson":
        //this.iab.create( scanData.info, "_system" );
        this.modalCtrl.create(scanData.info).present();
      break;
    }*/

  }

// Presentacion a manera de alerta del elemento escaneado
 crear_toast( mensaje:string ){
    this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    }).present();
  }

// Funcion que carga el historial
  cargar_historial(){
    return this._historial;
  }


}
