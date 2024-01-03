import { Component, OnInit } from '@angular/core';
import { personasService } from '../personas.service';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: personasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personasService.obtenerPersonas().subscribe((personas: Persona[]) => {
      this.personas = personas
      console.log(personas);
      this.personasService.setPersonas(personas)
    });
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
 }
