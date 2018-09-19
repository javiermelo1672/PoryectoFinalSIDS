import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-modificar-tu-usuario',
  templateUrl: 'modificar-tu-usuario.html'
})
export class ModificarTuUsuarioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
