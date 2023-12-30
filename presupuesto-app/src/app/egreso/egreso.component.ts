import { Component, Input, OnInit } from '@angular/core';
import { EgresoService } from '../egreso.service';
import { Egreso } from '../egreso.model';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;

  constructor(private egresoService: EgresoService) {}

  ngOnInit(): void {
    this.egresos = this.egresoService.egreso;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    let porcentaje: number;
    if (this.ingresoTotal === 0) {
      return (porcentaje = 0);
    }
    porcentaje = Math.floor((egreso.valor / this.ingresoTotal) * 100);
    return porcentaje;
  }
}
