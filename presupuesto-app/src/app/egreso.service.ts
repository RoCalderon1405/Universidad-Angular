import { Egreso } from './egreso.model';

export class EgresoService {
  egreso: Egreso[] = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 435.28),
  ];

  eliminar(egreso: Egreso) {
    const indice: number = this.egreso.indexOf(egreso);
    this.egreso.splice(indice, 1);
  }
}
