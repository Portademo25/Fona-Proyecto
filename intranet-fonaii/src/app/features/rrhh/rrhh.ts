import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rrhh',
  imports: [CommonModule],
  templateUrl: './rrhh.html',
  styleUrl: './rrhh.scss',
  standalone: true
})
export class RrhhComponent {
  areas = [
    {
      titulo: 'Bienestar Social',
      descripcion: 'Encargados de la gestión de seguros (HCM), convenios médicos y actividades recreativas para el trabajador y su familia.',
      tramites: ['Inclusión de cargas familiares', 'Cartas avales', 'Reembolsos']
    },
    {
      titulo: 'Nómina y Prestaciones',
      descripcion: 'Gestión de pagos quincenales, bonificaciones, fideicomisos y liquidaciones según la normativa legal vigente.',
      tramites: ['Recibos de pago', 'Estado de cuenta de fideicomiso', 'Cálculos de ley']
    },
    {
      titulo: 'Registro y Control',
      descripcion: 'Custodia de expedientes, actualización de datos personales, control de asistencia y emisión de documentos oficiales.',
      tramites: ['Constancias de trabajo', 'Actualización de datos', 'Carnetización']
    },
    {
      titulo: 'Capacitación y Desarrollo',
      descripcion: 'Promovemos el crecimiento profesional a través de planes de formación, talleres y evaluación de desempeño.',
      tramites: ['Inscripción en cursos', 'Plan de carrera', 'Pasantías']
    }
  ];
}
