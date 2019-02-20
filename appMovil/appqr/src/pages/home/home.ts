import { Component } from '@angular/core';
// Componentes
import { ToastController, Platform } from 'ionic-angular';
// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// servicios
import { HistorialService } from "../../providers/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private barcodeScanner: BarcodeScanner,
               private toastCtrl: ToastController,
               private platform: Platform,
               private _historialService:HistorialService) {}

//FUNCION QUE GENERA ESCANER
  scan(){
    console.log("Escaner en proceso...");

    if( !this.platform.is('cordova') ){
        this._historialService.agregar_historial("IS NOT CORDOVA");
      return;
    }

    this.barcodeScanner.scan().then( (barcodeData) => {
     // Success! Barcode data is here
     console.log("result:", barcodeData.text );
     console.log("format:", barcodeData.format );
     console.log("cancelled:", barcodeData.cancelled );
     //alert( barcodeData.text);
     //this.detalles = barcodeData.text;
     if( barcodeData.cancelled == false && barcodeData.text != null ){
       this._historialService.agregar_historial( barcodeData.text  );
     }
   }, (err) => {
        // An error occurred
        console.error("Error: ", err );
        this.mostrar_error( "Error: " + err );
    });
  }

  // Funcion que presenta mesaje de error
  mostrar_error( mensaje:string ){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
    });
    toast.present();
  }

    /*ionViewDidLoad(){
    this._historialService.agregar_historial()
    .subscribe(
      (data)=>{this.informacion = data;},
      (error)=>{console.log(error);}
    )
  }*/

}
