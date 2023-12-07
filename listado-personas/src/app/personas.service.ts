import { Persona } from './persona.model';

export class personasService {
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Pedro', 'Pérez'),
    new Persona('Jose', 'Pérez'),
  ];

  personaAgregada(persona: Persona) {
    this.personas.push(persona);
  }
}
