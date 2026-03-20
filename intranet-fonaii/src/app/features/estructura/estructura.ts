import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UnidadOrganica {
  nombre: string;
  icono: string;
}

interface NivelJerarquico {
  rango: string;
  color: string;
  unidades: UnidadOrganica[];
}

@Component({
  selector: 'app-estructura',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estructura.html',
  styleUrl: './estructura.scss'
})
export class Estructura {

  public organigrama: NivelJerarquico[] = [
    {
      rango: 'Nivel Superior',
      color: '#e27474', // El rojo/rosa de la imagen
      unidades: [
        { nombre: 'Consejo Directivo', icono: '⚖️' },
        { nombre: 'Dirección Ejecutiva', icono: '🏛️' },
        { nombre: 'Comisión de Contrataciones', icono: '🤝' },
      ]
    },
    {
      rango: 'Oficinas de Apoyo y Asesoría',
      color: '#6d83b7', // El azul de la imagen
      unidades: [
        { nombre: 'Dirección de Despacho', icono: '✍️' },
        { nombre: 'Asesoría Legal', icono: '📜' },
        { nombre: 'Oficina de Planificación, Presupuesto y Control de Gestión', icono: '📈' },
        { nombre: 'Oficina de Gestión Administrativa', icono: '💼' },
        { nombre: 'Oficina de Tecnología de la Información y la Comunicación', icono: '💻' },
        { nombre: 'Oficina de Gestión Humana', icono: '👥' }
      ]
    },
    {
      rango: 'Direcciones Sustantivas',
      color: '#c18f57', // El marrón/dorado de la imagen
      unidades: [
        { nombre: 'Dirección de Recaudación y Administración Financiera', icono: '💰' },
        { nombre: 'Dirección de Fiscalización de los Contribuyentes', icono: '🔍' },
        { nombre: 'Dirección de Gestión y Evaluación de Proyectos', icono: '🏗️' },
        { nombre: 'Dirección de Capacitación en Materia de Prevención Laboral', icono: '🎓' },
        { nombre: 'Dirección de Red Nacional', icono: '📍' }
      ]
    }
  ];
}
