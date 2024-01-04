import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable({ providedIn: 'root' })
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get<Persona[]>(
      `https://listado-personas-21103-default-rtdb.firebaseio.com/datos.json?auth=${token}`
    );
  }

  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();

    this.httpClient
      .put(
        'https://listado-personas-21103-default-rtdb.firebaseio.com/datos.json?auth=' +
          token,
        personas
      )
      .subscribe(
        (response) => {
          console.log('Resulado guardar Personas' + JSON.stringify(response));
        },
        (error) => {
          console.log('Error al guardar Personas:' + error);
        }
      );
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();

    let url: string;
    url = `https://listado-personas-21103-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    this.httpClient.put(url, persona).subscribe(
      (response) => console.log('Resultado de modificar Persona' + response),
      (error) => console.log('Error en modificar Persona' + error)
    );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();

    let url: string;
    url = `https://listado-personas-21103-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    this.httpClient.delete(url).subscribe(
      (response) => console.log('Resultado de modificar Persona' + response),
      (error) => console.log('Error en modificar Persona' + error)
    );
  }
}
