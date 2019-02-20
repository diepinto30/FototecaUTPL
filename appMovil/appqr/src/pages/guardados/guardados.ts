import { Component } from '@angular/core';

import { HistorialService } from "../../providers/historial";
import { ScanData } from "../../models/scan-data.model";

@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html'
})
export class GuardadosPage {
  // Lista de los recursos escaneados
  historial: ScanData[] = [];

  constructor( private _historialService:HistorialService  ) {}
  // Primera vista de HISTORIAL
  ionViewDidLoad() {
    this.historial = this._historialService.cargar_historial();
  }
  // Funcion que abre el escaner
  abrir_scan( index:number ){
    this._historialService.abrir_scan( index );
  }

}
