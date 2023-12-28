import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { personasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput: string = '';
  // apellidoInput: string = '';
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private personasService: personasService
  ) {
    this.personasService.saludar.subscribe( 
      (indice: number) => alert(`El índice es: ${indice}`)
    )
  }

  agregarPersona(): void {
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    // this.loggingService.enviaMensajeAConsola("Enviamos persona: " + persona1.nombre + persona1.apellido)
    // this.personaCreada.emit(persona1);
    this.personasService.personaAgregada(persona1);
    this.nombreInput.nativeElement.value = '';
    this.apellidoInput.nativeElement.value = '';
  }
}
