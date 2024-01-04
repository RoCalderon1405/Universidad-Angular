import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable()
export class LoginService {
  token: string;

  constructor(private router: Router) {
    // Inicializar Firebase
    const firebaseConfig = {
      apiKey: 'AIzaSyD7HoBEUDpqVROtKhdedn5K4d4umA0NqVw',
      authDomain: 'listado-personas-21103.firebaseapp.com',
      // ... otras configuraciones de Firebase
    };

    initializeApp(firebaseConfig);
  }

  login(email: string, password: string) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Acceso exitoso, aquí puedes manejar el token u otras acciones
        const user = userCredential.user;
        this.token = (await user?.getIdToken()) || '';
        console.log('Inicio de sesión exitoso:', user);
        localStorage.setItem('token', this.token);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
      });
  }

  getIdToken() {
    return this.token;
  }
}
