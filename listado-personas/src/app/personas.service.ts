import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { DataServices } from './data.service';

@Injectable()
export class personasService {
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(
    private logginService: LoggingService,
    private dataService: DataServices
  ) {}

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  obtenerPersonas() {
    return this.dataService.cargarPersonas();
  }

  personaAgregada(persona: Persona) {
    this.logginService.enviaMensajeAConsola(
      `Agregamos persona ${persona.nombre}  ${persona.apellido}`
    );

    if (this.personas == null) {
      this.personas = [];
    }

    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    console.log(this.personas);
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(persona: Persona, index: number) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(index, persona);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(index);
    // se vuelve a guardar el array para regenerar los indices
    this.modificarPersonas()
  }

  modificarPersonas(){
    if(this.personas !== null) {
      this.dataService.guardarPersonas(this.personas)
    }
  }
}
