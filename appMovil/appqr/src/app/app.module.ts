import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


// Mapas
import { AgmCoreModule } from 'angular2-google-maps/core';

import { GuardadosPage, HomePage, JsonPage, TabsPage } from "../pages/index.paginas";


// servicios
import { HistorialService } from "../providers/historial";

// plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts } from '@ionic-native/contacts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    GuardadosPage,
    HomePage,
    JsonPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY'
    })/*,
    NgbModule.forRoot(),
    NgbCarouselModule.forRoot()*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GuardadosPage,
    HomePage,
    JsonPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    Contacts,
    HistorialService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
