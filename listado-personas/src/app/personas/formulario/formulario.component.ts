import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { personasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string = '';
  apellidoInput: string = '';
  index: number;

  constructor(
    private loggingService: LoggingService,
    private personasService: personasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert(`El índice es: ${indice}`)
    );
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(): void {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);

    if (this.index) {
      this.personasService.modificarPersona(persona1, this.index);
    } else {
      this.personasService.personaAgregada(persona1);
    }

    this.nombreInput = '';
    this.apellidoInput = '';
    this.router.navigate(['/personas']);
  }
}
