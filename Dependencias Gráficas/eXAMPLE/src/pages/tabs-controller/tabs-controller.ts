import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { HistorialDePedidosPage } from '../historial-de-pedidos/historial-de-pedidos';
import { NoticiasPage } from '../noticias/noticias';
import { ConfiguraciNPage } from '../configuraci-n/configuraci-n';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InicioPage;
  tab2Root: any = HistorialDePedidosPage;
  tab3Root: any = NoticiasPage;
  tab4Root: any = ConfiguraciNPage;
  constructor(public navCtrl: NavController) {
  }
  
}
