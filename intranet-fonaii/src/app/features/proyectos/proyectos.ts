import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServicioProyecto {
  titulo: string;
  icono: string;
  descripcion: string;
  items: string[];
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss'
})
export class Proyectos {

  public servicios: ServicioProyecto[] = [
    {
      titulo: 'Infraestructura Preventiva',
      icono: '🏗️',
      descripcion: 'Ejecución y rehabilitación de espacios para el deporte, la cultura y el sano esparcimiento.',
      items: [
        'Recuperación de canchas',
        'Mantenimiento de centros educativos',
        'Acondicionamiento de sedes'
      ]
    },
    {
      titulo: 'Control y Seguimiento',
      icono: '📝',
      descripcion: 'Inspección técnica de obras para garantizar el cumplimiento de los estándares de calidad.',
      items: [
        'Cómputos métricos',
        'Valuación de obras',
        'Inspecciones de campo'
      ]
    },
    {
      titulo: 'Prevención Integral',
      icono: '🤝',
      descripcion: 'Desarrollo de proyectos sociales orientados a la reducción de factores de riesgo.',
      items: [
        'Proyectos comunitarios',
        'Dotación de material deportivo',
        'Programas de formación'
      ]
    },
    {
      titulo: 'Planos y Diseño',
      icono: '📐',
      descripcion: 'Elaboración de propuestas arquitectónicas y presupuestos para nuevas obras.',
      items: [
        'Diseño de planos',
        'Memoria descriptiva',
        'Cronograma de ejecución'
      ]
    }
  ];
}
