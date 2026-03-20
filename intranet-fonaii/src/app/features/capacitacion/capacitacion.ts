import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServicioCapacitacion   {
  titulo: string;
  icono: string;
  descripcion: string;
  items: string[];
}

@Component({
  selector: 'app-capacitacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capacitacion.html',
  styleUrl: './capacitacion.scss',
})
export class Capacitacion {
  public servicios: ServicioCapacitacion[] = [
    {
      titulo: 'Formación de Servidores',
      icono: '🎓',
      descripcion: 'Programas de actualización profesional y técnica para el personal administrativo y operativo.',
      items: [
        'Cursos de gestión pública',
        'Talleres de liderazgo',
        'Actualización en sistemas internos'
      ]
    },
    {
      titulo: 'Prevención Integral',
      icono: '🗣️',
      descripcion: 'Capacitaciones dirigidas a comunidades, escuelas y empresas sobre el uso indebido de sustancias.',
      items: [
        'Charlas preventivas comunitarias',
        'Formación de multiplicadores',
        'Talleres en centros educativos'
      ]
    },
    {
      titulo: 'Inducción Institucional',
      icono: '📖',
      descripcion: 'Programa de bienvenida y orientación para los nuevos ingresos sobre la misión y visión del FONA.',
      items: [
        'Historia y valores del FONA',
        'Marco legal institucional',
        'Recorrido de procesos'
      ]
    },
    {
      titulo: 'Certificaciones y Registro',
      icono: '📜',
      descripcion: 'Gestión de constancias de participación y base de datos de los ciudadanos formados.',
      items: [
        'Emisión de certificados digitales',
        'Control de asistencia y notas',
        'Validación de horas académicas'
      ]
    }
  ];
}
