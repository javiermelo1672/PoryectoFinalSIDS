import { Component, OnInit, HostBinding} from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Usuario';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  userst= {} as Usuario;
  constructor(private afAuth:AngularFireAuth,private router:Router) { 

    this.afAuth.authState.subscribe(user =>{
      if(user)
      {
        this.router.navigateByUrl('/HomePage');
        console.log('Usuario en sesión')
      }
    });
  }

  ngOnInit() {
  }

  
  loginFb() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider).then(
      (success) => {
        this.router.navigate(['/homepage']);
      }).catch(
        (err) => {
        
      }
    );
  }

  loginGoogle () {
    const provider= new firebase.auth.GoogleAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider).then(
      (success) => {
        this.router.navigate(['/homepage']);
      }).catch(
        (err) => {
        
      }
    );
  }

}
