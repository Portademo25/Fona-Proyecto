import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'rrhh',
    loadComponent: () => import('./features/rrhh/rrhh').then(m => m.RrhhComponent)
  },
  {
    path: 'fasmij',
    loadComponent: () => import('./features/fasmij/fasmij').then(m => m.Fasmij)
  },
  {
    path: 'tecnologia',
    loadComponent: () => import('./features/tecnologia/tecnologia').then(m => m.TecnologiaComponent)
  },
  {
    path: 'recaudacion',
    loadComponent: () => import('./features/recaudacion/recaudacion').then(m => m.RecaudacionComponent)
  },
  {
     path: 'fiscalizacion',
      loadComponent: () => import('./features/fiscalizacion/fiscalizacion').then(m => m.FiscalizacionComponent)
  },
  {
    path: 'administracion',
    loadComponent: () => import('./features/administracion/administracion').then(m => m.AdministracionComponent)
  },
  {
    path: 'planificacion',
    loadComponent: () => import('./features/planificacion/planificacion').then(m => m.PlanificacionComponent)
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./features/proyectos/proyectos').then(m => m.Proyectos)
  },
  {
    path: 'asesoria-juridica',
    loadComponent: () => import('./features/asesoria-juridica/asesoria-juridica').then(m => m.AsesoriaJuridica)
  },
  {
    path: 'capacitacion',
    loadComponent: () => import('./features/capacitacion/capacitacion').then(m => m.Capacitacion)
  },
  {
    path: 'estructura',
    loadComponent: () => import('./features/estructura/estructura').then(m => m.Estructura)
  },
  {
    path: 'directorio',
    loadComponent: () => import('./features/directorio/directorio').then(m => m.Directorio)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then(m => m.Login)
  },


  // --- RUTAS PRIVADAS (Requieren JWT / Iniciar Sesión) ---
  {
    path: 'mis-descargas',
    canActivate: [authGuard],
    loadComponent: () => import('./features/downloads/downloads').then(m => m.Downloads)
  },
   {
     path: 'mis-descargas/manuales',
     loadComponent: () => import('./features/downloads/manuals/manuals').then(m => m.Manuals),
     canActivate: [authGuard]
   },
  {
    path: 'mis-descargas/formatos-rrhh',
    loadComponent: () => import('./features/downloads/rrhh/rrhh').then(m => m.Rrhh),
    canActivate: [authGuard]
  },
  {
    path: 'mis-descargas/formatos-generales',
    loadComponent: () => import('./features/downloads/generales/generales').then(m => m.Generales),
    canActivate: [authGuard]
  },
  {
    path: 'mis-sistemas',
  loadComponent: () => import('./features/systems/systems').then(m => m.Systems),
  canActivate: [authGuard]
  },

  // Redirección por defecto
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Ruta para manejar errores 404 (Wildcard)
  { path: '**', redirectTo: 'home' }
];
