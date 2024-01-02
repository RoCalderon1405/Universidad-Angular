import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { DataServices } from './data.services';

@Injectable()
export class personasService {
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Pedro', 'Pérez'),
    new Persona('Jose', 'Pérez'),
  ];

  saludar = new EventEmitter<number>();

  constructor(
    private logginService: LoggingService,
    private dataService: DataServices
  ) {}

  personaAgregada(persona: Persona) {
    this.logginService.enviaMensajeAConsola(
      `Agregamos persona ${persona.nombre}  ${persona.apellido}`
    );
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas)
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(persona: Persona, index: number) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
