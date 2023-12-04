import { Component } from '@angular/core';

@Component({
  selector: 'app-Calculadora',
  templateUrl: './Calculadora.component.html',
  styleUrls: ['./Calculadora.component.css'],
})
export class CalculadoraComponent {
  operandoA?: number;
  operandoB?: number;
  resultado?: number;
  mensaje: string = '';
  habilitarBtn: boolean = false;

  mensajeInvalido() {
    this.mensaje = 'Debes ingresar ambos valores';
    setTimeout(() => {
      this.mensaje = '';
    }, 2 * 1000);
  }

  funcionSumar(): void {
    if (this.operandoA === undefined || this.operandoB === undefined) {
      this.mensajeInvalido();
    } else {
      if (this.operandoA !== null && this.operandoB !== null) {
        this.resultado = this.operandoA + this.operandoB;
      } else {
        this.mensajeInvalido();
        return (this.resultado = undefined);
      }
    }
    return;
  }
}
