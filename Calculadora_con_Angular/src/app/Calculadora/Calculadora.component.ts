import { Component } from '@angular/core';

@Component({
  selector: 'app-Calculadora',
  templateUrl: './Calculadora.component.html',
  styleUrls: ['./Calculadora.component.css'],
})
export class CalculadoraComponent {
  mensajePadre: string;
  resultadoPadre: number;

  mensajeError(mensaje: string): void {
    this.mensajePadre = mensaje;
  }

  resultadoSuma(resultado: number): void {
    this.resultadoPadre = resultado;
  }
}
