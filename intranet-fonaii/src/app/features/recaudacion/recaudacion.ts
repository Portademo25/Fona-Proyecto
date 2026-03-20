import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recaudacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recaudacion.html',
  styleUrl: './recaudacion.scss'
})
export class RecaudacionComponent {
  serviciosRecaudacion = [
    {
      titulo: 'Aportes de Ley',
      icono: '📉',
      descripcion: 'Información sobre el pago del 1% de la utilidad neta anual para empresas con más de 50 trabajadores.',
      detalles: ['Base imponible', 'Cálculo del aporte', 'Cronograma de pagos']
    },
    {
      titulo: 'Sujetos Pasivos',
      icono: '🏢',
      descripcion: 'Definición de las empresas y entes obligados a declarar según la LOD (Ley Orgánica de Drogas).',
      detalles: ['Empresas Privadas', 'Entes Públicos', 'Sanciones por mora']
    },
    {
      titulo: 'Sistemas de Declaración',
      icono: '🖥️',
      descripcion: 'Guía técnica para el uso de la plataforma digital de declaración y pago en línea.',
      detalles: ['Registro de usuario', 'Carga de estados financieros', 'Certificado de solvencia']
    },
    {
      titulo: 'Verificación y Control',
      icono: '📋',
      descripcion: 'Proceso de revisión de pagos y validación de certificados de solvencia institucional.',
      detalles: ['Validación de depósitos', 'Emisión de solvencias', 'Consultas de estatus']
    }
  ];
}
