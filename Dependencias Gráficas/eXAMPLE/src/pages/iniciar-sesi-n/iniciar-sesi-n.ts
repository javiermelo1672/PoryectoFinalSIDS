import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearTuUsuarioPage } from '../crear-tu-usuario/crear-tu-usuario';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCrearTuUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(CrearTuUsuarioPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }
}
