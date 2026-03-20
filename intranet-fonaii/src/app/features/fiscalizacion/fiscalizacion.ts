import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fiscalizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fiscalizacion.html',
  styleUrl: './fiscalizacion.scss'
})
export class FiscalizacionComponent {
  procesosFiscal = [
    {
      titulo: 'Auditoría de Cumplimiento',
      icono: '🔍',
      descripcion: 'Revisión exhaustiva de los libros contables y estados financieros para validar el aporte del 1%.',
      pasos: ['Notificación de visita', 'Requerimiento de documentos', 'Acta de conformidad']
    },
    {
      titulo: 'Inspecciones de Campo',
      icono: '🛡️',
      descripcion: 'Visitas presenciales a establecimientos comerciales y entes públicos a nivel nacional.',
      pasos: ['Verificación de sede', 'Entrevista con representantes', 'Constatación de actividad']
    },
    {
      titulo: 'Procedimientos Administrativos',
      icono: '⚖️',
      descripcion: 'Gestión de expedientes en caso de ilícitos tributarios o incumplimiento de deberes formales.',
      pasos: ['Apertura de sumario', 'Descargos de ley', 'Resolución final']
    },
    {
      titulo: 'Capacitación al Contribuyente',
      icono: '📋',
      descripcion: 'Orientación sobre cómo mantener al día la documentación legal ante una posible inspección.',
      pasos: ['Charlas preventivas', 'Guía de documentos', 'Asesoría técnica']
    }
  ];
}
