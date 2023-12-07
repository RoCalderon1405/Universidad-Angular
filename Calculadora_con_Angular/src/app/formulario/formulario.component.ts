import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  operandoA?: number;
  operandoB?: number;
  habilitarBtn: boolean = false;
  mensaje: string = '';

  @Output() resultadoSuma = new EventEmitter<number>();
  @Output() mensajeError = new EventEmitter<string>();


  funcionSumar(): void {
    if (this.operandoA === undefined || this.operandoB === undefined) {
      this.mensajeInvalido();
      return
    }
    if (this.operandoA !== null && this.operandoB !== null) {
      let resultado = this.operandoA + this.operandoB;
      this.resultadoSuma.emit(resultado);
    } else {
      this.mensajeInvalido();
      return
    }
  }

  mensajeInvalido() {
    let mensaje = 'Debes ingresar ambos valores';
    this.mensajeError.emit(mensaje);
    setTimeout(() => {
      let mensaje = '';
      this.mensajeError.emit(mensaje);
    }, 2 * 1000);
  }
}
