import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModificarTuUsuarioPage } from '../modificar-tu-usuario/modificar-tu-usuario';
import { AAdirTarjetasPage } from '../a-adir-tarjetas/a-adir-tarjetas';
import { IniciarSesiNPage } from '../iniciar-sesi-n/iniciar-sesi-n';
import { CrearTuUsuarioPage } from '../crear-tu-usuario/crear-tu-usuario';
import { InicioPage } from '../inicio/inicio';
import { TabsControllerPage } from '../../pages/tabs-controller/tabs-controller';
@Component({
  selector: 'page-configuraci-n',
  templateUrl: 'configuraci-n.html'
})
export class ConfiguraciNPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToModificarTuUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(ModificarTuUsuarioPage);
  }goToAAdirTarjetas(params){
    if (!params) params = {};
    this.navCtrl.push(AAdirTarjetasPage);
  }goToIniciarSesiN(params){
    if (!params) params = {};
    this.navCtrl.push(IniciarSesiNPage);
  }goToCrearTuUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(CrearTuUsuarioPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.popToRoot;
    
    
    
    
  }
}
