import { Component, Input, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso.service';
import { EgresoService } from '../egreso.service';
import { Egreso } from '../egreso.model';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() presupuestoTotal: number = 0;
  @Input() porcentajeTotal: number = 0;
  @Input() ingresos: Ingreso[] = [];
  @Input() egresos: Egreso[] = [];
  ingresosValor: number = 0;

  gastosValor: number = 0;

  constructor(
    private ingresosService: IngresoService,
    private egresosService: EgresoService
  ) {}

  ngOnInit(): void {
  }
}
