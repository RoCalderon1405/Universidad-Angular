import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { EgresoService } from './egreso.service';
import { IngresoService } from './ingreso.service';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    IngresoComponent,
    EgresoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EgresoService, IngresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
