import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router'; // 1. Importar RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // 2. Agregarlo aquí
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  searchQuery = signal('');
  constructor(private router: Router) {}

  // 3. Añadimos la propiedad 'ruta' a cada objeto
  private allDepartamentos = [
    {
    nombre: 'Planificación y Presupuesto',
    icono: '📈',
    ruta: 'planificacion',
    descripcion: 'Diseño de planes operativos, formulación presupuestaria y seguimiento de metas.'
  },
    { nombre: 'Recaudación', icono: '💰', ruta: '/recaudacion', descripcion: 'Gestión de aportes y contribuciones especiales.' },
    { nombre: 'Talento Humano', icono: '👥', ruta: '/rrhh', descripcion: 'Gestión de nómina, beneficios y bienestar laboral.' },
    { nombre: 'Tecnología', icono: '💻', ruta: '/tecnologia', descripcion: 'Soporte técnico, sistemas y seguridad informática.' },
    { nombre: 'Proyectos', icono: '🏗️', ruta: '/proyectos', descripcion: 'Planificación y ejecución de obras de prevención.' },
    { nombre: 'Capacitación', icono: '🎓', ruta: '/capacitacion', descripcion: 'Formación continua y talleres institucionales.' },
    { nombre: 'Asesoría Jurídica', icono: '⚖️', ruta: '/asesoria-juridica', descripcion: 'Apoyo legal y normativa institucional.' },
    { nombre: 'Fiscalización', icono: '🔍', ruta: '/fiscalizacion', descripcion: 'Auditoría y control de cumplimiento de la ley.' },
    { nombre: 'Administración', icono: '🏢', ruta: '/administracion', descripcion: 'Gestión financiera y recursos operativos.' }
  ];

  departamentosFiltrados = computed(() => {
    const text = this.searchQuery().toLowerCase();
    if (!text) return this.allDepartamentos;
    return this.allDepartamentos.filter(d =>
      d.nombre.toLowerCase().includes(text) ||
      d.descripcion.toLowerCase().includes(text)
    );
  });


  // 4. Método para navegar a la ruta del departamento
  navegar(rutaDestino: string) {
    console.log('--- DIAGNÓSTICO DE NAVEGACIÓN ---');
    console.log('Intentando ir a:', rutaDestino);

    this.router.navigate([rutaDestino]).then(success => {
      if (success) {
        console.log('✅ Navegación exitosa');
      } else {
        console.error('❌ La navegación falló. Revisa si la ruta existe en app.routes.ts');
      }
    }).catch(err => {
      console.error('⚠️ Error crítico en el Router:', err);
    });
  }

}
