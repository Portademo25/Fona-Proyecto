import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServicioJuridico {
  titulo: string;
  icono: string;
  descripcion: string;
  items: string[];
}

@Component({
  selector: 'app-asesoria-juridica',
  imports: [CommonModule],
  templateUrl: './asesoria-juridica.html',
  styleUrl: './asesoria-juridica.scss',
  standalone: true
})
export class AsesoriaJuridica {
  public servicios: ServicioJuridico[] = [
    {
      titulo: 'Dictámenes y Opiniones',
      icono: '⚖️',
      descripcion: 'Análisis y pronunciamientos legales sobre consultas realizadas por las distintas dependencias del FONA.',
      items: [
        'Interpretación de leyes y reglamentos',
        'Asesoría en toma de decisiones',
        'Consultas de derecho administrativo'
      ]
    },
    {
      titulo: 'Contratos y Convenios',
      icono: '📜',
      descripcion: 'Redacción, revisión y visado de documentos legales que vinculan a la institución con terceros.',
      items: [
        'Contratos de obras y servicios',
        'Convenios institucionales',
        'Alianzas estratégicas'
      ]
    },
    {
      titulo: 'Sustanciación Legal',
      icono: '📂',
      descripcion: 'Manejo de expedientes administrativos y defensa judicial de los intereses de la institución.',
      items: [
        'Atención de recursos jerárquicos',
        'Representación ante tribunales',
        'Procedimientos sancionatorios'
      ]
    },
    {
      titulo: 'Adecuación Normativa',
      icono: '🏛️',
      descripcion: 'Actualización constante del marco legal interno basado en la Gaceta Oficial y leyes vigentes.',
      items: [
        'Redacción de reglamentos internos',
        'Revisión de providencias',
        'Compilación de leyes del sector'
      ]
    }
  ];
}
