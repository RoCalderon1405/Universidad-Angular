import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Personas.';
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Pedro', 'Pérez'),
    new Persona('Jose', 'Pérez'),
  ];
  constructor(private loggingService: LoggingService) {}

  personaAgregada(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('hola'+persona.apellido)
    this.personas.push(persona);
  }
}
