import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';
import { EgresoService } from './egreso.service';
import { Egreso } from './egreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'presupuesto-app';

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresosService: IngresoService,
    private egresosService: EgresoService
  ) {
    this.ingresos = ingresosService.ingreso;
    this.egresos = egresosService.egreso;
  }

  getIngresos() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }
  getEgresos() {
    let egresoTotal: number = 0;
    this.egresos.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal() {
    if (this.getIngresos() === 0) {
      return 0;
    }

    let porcentaje = this.getEgresos() / this.getIngresos();
    return Math.floor(porcentaje * 100);
  }

  getPresupuestoTotal() {
    return this.getIngresos() - this.getEgresos();
  }

  ngOnInit(): void {}
}
