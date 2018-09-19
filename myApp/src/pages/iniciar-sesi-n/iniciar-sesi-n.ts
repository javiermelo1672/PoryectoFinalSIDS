import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';
import { CrearTuUsuarioPage } from '../crear-tu-usuario/crear-tu-usuario';
import { InicioPage } from '../inicio/inicio';
import { TabsControllerPage } from '../../pages/tabs-controller/tabs-controller';
@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,private viewCtrl: ViewController) {
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
    
}
  goToCrearTuUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(CrearTuUsuarioPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}
