import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userst= {} as Usuario;
  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  registro(Data)
  {
    this.afAuth.auth.createUserWithEmailAndPassword
  }


}
