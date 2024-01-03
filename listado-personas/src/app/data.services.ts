import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';

@Injectable({ providedIn: 'root' })
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  // Guardar Personas
  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put(
        'https://listado-personas-21103-default-rtdb.firebaseio.com/datos.json',
        personas
      )
      .subscribe(
        (response) => {
          console.log('Resulado guardar Personas' + response);
        },
        (error) => {
          console.log('Error al guardar Personas:' + error);
        }
      );
  }
}
