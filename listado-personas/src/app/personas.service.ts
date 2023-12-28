import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

@Injectable()
export class personasService {
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Pedro', 'Pérez'),
    new Persona('Jose', 'Pérez'),
  ];

  constructor(private logginService: LoggingService) {}

  personaAgregada(persona: Persona) {
    this.logginService.enviaMensajeAConsola(`Agregamos persona ${persona.nombre}  ${persona.apellido}`)
    this.personas.push(persona);
  }
}
