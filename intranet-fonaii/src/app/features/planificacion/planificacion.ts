import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServicioPlanificacion {
  titulo: string;
  icono: string;
  descripcion: string;
  items: string[];
}

@Component({
  selector: 'app-planificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planificacion.html',
  styleUrl: './planificacion.scss'
})
export class PlanificacionComponent {

  public servicios: ServicioPlanificacion[] = [
    {
      titulo: 'Planificación Estratégica (POA)',
      icono: '📈',
      descripcion: 'Diseño y seguimiento del Plan Operativo Anual para el cumplimiento de metas institucionales.',
      items: [
        'Definición de metas físicas',
        'Indicadores de gestión mensual',
        'Evaluación de resultados por dirección'
      ]
    },
    {
      titulo: 'Formulación Presupuestaria',
      icono: '📝',
      descripcion: 'Elaboración del anteproyecto de presupuesto y asignación de recursos por partidas.',
      items: [
        'Cálculo de cuotas de compromiso',
        'Programación de desembolsos',
        'Modificaciones y traspasos de ley'
      ]
    },
    {
      titulo: 'Organización y Métodos',
      icono: '📐',
      descripcion: 'Estandarización de procesos, creación de manuales y optimización de la estructura técnica.',
      items: [
        'Manuales de normas y procedimientos',
        'Diseño de flujogramas operativos',
        'Actualización de estructura organizativa'
      ]
    },
    {
      titulo: 'Estadísticas y Control',
      icono: '📊',
      descripcion: 'Recopilación de datos para la toma de decisiones y rendición de cuentas ante entes rectores.',
      items: [
        'Informes de gestión trimestral',
        'Análisis de variaciones presupuestarias',
        'Data histórica de cumplimiento'
      ]
    }
  ];
}
