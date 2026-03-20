import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos una interfaz para asegurar la estructura de los datos
interface ServicioAdmin {
  titulo: string;
  icono: string;
  descripcion: string;
  items: string[];
}

@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './administracion.html',
  styleUrl: './administracion.scss'
})
export class AdministracionComponent {

  // Tipamos el array con nuestra interfaz
  public servicios: ServicioAdmin[] = [

    {
      titulo: 'Bienes Nacionales',
      icono: '🏷️',
      descripcion: 'Registro, control y custodia de los activos muebles e inmuebles propiedad del FONA.',
      items: [
        'Inventario y rotulación',
        'Asignación de activos por oficina',
        'Desincorporación y actas de bienes'
      ]
    },
    {
      titulo: 'Compras y Suministros',
      icono: '🛒',
      descripcion: 'Gestión de adquisiciones de bienes y servicios necesarios para el funcionamiento del FONA.',
      items: [
        'Registro de proveedores',
        'Análisis de cotizaciones',
        'Control de inventario y almacén'
      ]
    },
    {
      titulo: 'Servicios Generales',
      icono: '🏢',
      descripcion: 'Mantenimiento de la infraestructura física, flota vehicular y logística operativa.',
      items: [
        'Mantenimiento de sedes',
        'Gestión de transporte y combustible',
        'Seguridad y vigilancia'
      ]
    },
    {
      titulo: 'Tesorería',
      icono: '💰',
      descripcion: 'Manejo de flujos de caja, pagos a proveedores y custodia de valores financieros.',
      items: [
        'Emisión de pagos y transferencias',
        'Conciliaciones bancarias',
        'Gestión de caja chica'
      ]
    }
  ];

  constructor() {}
}
