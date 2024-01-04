import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas.';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyD7HoBEUDpqVROtKhdedn5K4d4umA0NqVw',
      authDomain: 'listado-personas-21103.firebaseapp.com',
    });
  }

  isAuth() {
    return this.loginService.isAuth();
  }

  salir() {
    this.loginService.logOut();
  }
}
