import { Component, OnInit, NgModule } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import { EgresoService } from '../egreso.service';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  descripcionProd: string = '';
  valorProd: number;

  ingresos: Ingreso[] = [];

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingreso;
  }

  agregarProd() {
    if (this.descripcionProd == '' || this.valorProd == undefined) {
      alert('Por favor llena todos los campos del formulario.');
      return;
    }

    let newProd = new Ingreso(this.descripcionProd, this.valorProd);

    this.ingresos.push(newProd);
  }
}
