import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { HistorialDePedidosPage } from '../pages/historial-de-pedidos/historial-de-pedidos';
import { NoticiasPage } from '../pages/noticias/noticias';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { IniciarSesiNPage } from '../pages/iniciar-sesi-n/iniciar-sesi-n';
import { CrearTuUsuarioPage } from '../pages/crear-tu-usuario/crear-tu-usuario';
import { ModificarTuUsuarioPage } from '../pages/modificar-tu-usuario/modificar-tu-usuario';
import { ConfiguraciNPage } from '../pages/configuraci-n/configuraci-n';
import { AAdirTarjetasPage } from '../pages/a-adir-tarjetas/a-adir-tarjetas';
import { ChatDeSoportePage } from '../pages/chat-de-soporte/chat-de-soporte';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    HistorialDePedidosPage,
    NoticiasPage,
    TabsControllerPage,
    IniciarSesiNPage,
    CrearTuUsuarioPage,
    ModificarTuUsuarioPage,
    ConfiguraciNPage,
    AAdirTarjetasPage,
    ChatDeSoportePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    HistorialDePedidosPage,
    NoticiasPage,
    TabsControllerPage,
    IniciarSesiNPage,
    CrearTuUsuarioPage,
    ModificarTuUsuarioPage,
    ConfiguraciNPage,
    AAdirTarjetasPage,
    ChatDeSoportePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}