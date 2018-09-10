import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-crear-tu-usuario',
  templateUrl: 'crear-tu-usuario.html'
})
export class CrearTuUsuarioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
