import { Component, OnInit, HostBinding} from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {moveIn} from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[moveIn()],
  host:{'[@moveIn]':''}
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
