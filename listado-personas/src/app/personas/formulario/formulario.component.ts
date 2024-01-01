import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { personasService } from '../../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';
  // @ViewChild('nombreInput') nombreInput: ElementRef;
  // @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private personasService: personasService,
    private router: Router
  ) {
    this.personasService.saludar.subscribe( 
      (indice: number) => alert(`El índice es: ${indice}`)
    )
  }

  onGuardarPersona(): void {
    let persona1 = new Persona(
      this.nombreInput,
      this.apellidoInput
    );
    // this.loggingService.enviaMensajeAConsola("Enviamos persona: " + persona1.nombre + persona1.apellido)
    // this.personaCreada.emit(persona1);
    this.personasService.personaAgregada(persona1);
    this.nombreInput = '';
    this.apellidoInput = '';
    this.router.navigate(['/personas'])
  }
}
