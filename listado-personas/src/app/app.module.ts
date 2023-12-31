import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { personasService } from './personas.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    LoggingService,
    personasService,
    DataServices,
    LoginService,
    LoginGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
