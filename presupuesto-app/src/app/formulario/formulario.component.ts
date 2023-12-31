import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngresoService } from '../ingreso.service';
import { EgresoService } from '../egreso.service';
import { Ingreso } from '../ingreso.model';
import { Egreso } from '../egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @ViewChild('formularioProductos') formulario: NgForm;

  descripcionProd: string = '';
  valorProd: number;
  tipo: string = 'ingreso';

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingreso;
    this.egresos = this.egresoService.egreso;
  }

  agregarProd() {
    if (this.descripcionProd == '' || this.valorProd == undefined) {
      alert('Por favor llena todos los campos del formulario.');
      return;
    }
    this.descripcionProd =
      this.descripcionProd.charAt(0).toUpperCase() +
      this.descripcionProd.slice(1).toLocaleLowerCase();

    if (this.tipo === 'ingresoAgregar') {
      let newIngreso = new Ingreso(this.descripcionProd, this.valorProd);
      this.ingresos.push(newIngreso);
      this.resetearFormulario();
    } else {
      let newEgreso = new Egreso(this.descripcionProd, this.valorProd);
      this.egresos.push(newEgreso);
      this.resetearFormulario();
    }
  }
  resetearFormulario() {
    this.formulario.resetForm();
  }

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }
}
