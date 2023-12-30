import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];
  descripcion: string = '';
  valor: number;

  constructor(private ingresoService: IngresoService) {}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingreso;
  }

  eliminarIngreso(ingreso: Ingreso) {
    this.ingresoService.eliminar(ingreso);
  }
}
