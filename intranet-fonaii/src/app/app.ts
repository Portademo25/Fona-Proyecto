import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { RrhhComponent } from './features/rrhh/rrhh';
import { Fasmij } from './features/fasmij/fasmij';
import { NavbarComponent } from './layout/navbar/navbar';
import { FooterComponent } from './layout/footer/footer';
import { TecnologiaComponent } from './features/tecnologia/tecnologia';
import { RecaudacionComponent } from './features/recaudacion/recaudacion';
import { FiscalizacionComponent } from './features/fiscalizacion/fiscalizacion';
import { AdministracionComponent } from './features/administracion/administracion';
import { PlanificacionComponent } from './features/planificacion/planificacion';
import { Proyectos } from './features/proyectos/proyectos';
import { AsesoriaJuridica } from './features/asesoria-juridica/asesoria-juridica';
import { Capacitacion } from './features/capacitacion/capacitacion';
import { Estructura } from './features/estructura/estructura';
import { Directorio } from './features/directorio/directorio';
import { Login } from './features/login/login';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';
import { Downloads } from './features/downloads/downloads';
import { Manuals } from './features/downloads/manuals/manuals';
import { Rrhh } from './features/downloads/rrhh/rrhh';
import { Generales } from './features/downloads/generales/generales';
import { Systems } from './features/systems/systems';
// Ensure PlanificacionComponent is exported as a standalone component from its file

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    RrhhComponent,
    Fasmij,
    FooterComponent,
    TecnologiaComponent,
    RecaudacionComponent,
    FiscalizacionComponent,
    AdministracionComponent,
    PlanificacionComponent,
    Proyectos,
    AsesoriaJuridica,
    Capacitacion,
    Estructura,
    Directorio,
    Login,
    CommonModule,
    Downloads,
    Manuals,
    Rrhh,
    Generales,
    Systems

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('intranet-fonaii');
  constructor(public authService: AuthService) {}
}
