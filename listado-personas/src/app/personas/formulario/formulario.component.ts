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
  modoEdicion: number;

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
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    console.log(this.modoEdicion);

    if (this.modoEdicion !== null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      console.log(persona);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(): void {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);

    if (this.modoEdicion !== null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(persona1, this.index);
    } else {
      this.personasService.personaAgregada(persona1);
      console.log(persona1);
    }

    this.nombreInput = '';
    this.apellidoInput = '';
    this.router.navigate(['/personas']);
  }

  eliminarPersona() {
    console.log(this.index);
    if (this.index !== null) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['/personas']);
  }
}
