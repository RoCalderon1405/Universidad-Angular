import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';

@Injectable({ providedIn: 'root' })
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  cargarPersonas() {
    return this.httpClient.get<Persona[]>(
      'https://listado-personas-21103-default-rtdb.firebaseio.com/datos.json'
    );
  }

  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put(
        'https://listado-personas-21103-default-rtdb.firebaseio.com/datos.json',
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
    let url: string;
    url = `https://listado-personas-21103-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpClient.put(url, persona).subscribe(
      (response) => console.log('Resultado de modificar Persona' + response),
      (error) => console.log('Error en modificar Persona' + error)
    );
  }

  eliminarPersona(index: number){
    let url: string;
    url = `https://listado-personas-21103-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpClient.delete(url).subscribe(
      (response) => console.log('Resultado de modificar Persona' + response),
      (error) => console.log('Error en modificar Persona' + error)
    );
  }
}
