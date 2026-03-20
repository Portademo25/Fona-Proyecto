import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contacto {
  direccion: string;
  unidad: string;
  extension: string;
}


@Component({
  selector: 'app-directorio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directorio.html',
  styleUrl: './directorio.scss'
})
export class Directorio {
  public filtro: string = '';

  public contactos: Contacto[] = [
    // Nivel Superior
    { direccion: 'Dirección Ejecutiva', unidad: 'Despacho', extension: '8131 / 8132'  },

    // Oficinas de Apoyo (Azul)
    { direccion: 'Atencion al Ciudadano', unidad: 'Mesa de Ayuda', extension: '119',  },
    { direccion: 'Archivo Central', unidad: 'Almacenamiento de Expedientes', extension: '8133',  },
    { direccion: 'Asesoría Legal', unidad: 'Consultoría', extension: '8150'  },
    { direccion: 'Planificación', unidad: 'Presupuesto', extension: '8230', },
    { direccion: 'Gestión Administrativa', unidad: 'Compras', extension: '8210', },
    { direccion: 'Gestión Humana', unidad: 'Nómina', extension: '8170', },
    { direccion: 'Tecnología ', unidad: 'Soporte Técnico', extension: '8190', },

    // Direcciones Sustantivas (Marrón)
    { direccion: 'Recaudación', unidad: 'Atención al Contribuyente', extension: '8270 / 8271',  },
    { direccion: 'Recepcion ', unidad: 'Registro de Correspondencia', extension: '128',  },
    { direccion: 'Fiscalización', unidad: 'Investigación', extension: '8290', },
    { direccion: 'Proyectos', unidad: 'Inspección de Obras', extension: '8250', },
    { direccion: 'Capacitación', unidad: 'Formación Permanente', extension: '8310', },

  ];

  // Función para filtrar los contactos en tiempo real
  get contactosFiltrados() {
    return this.contactos.filter(c =>
      c.direccion.toLowerCase().includes(this.filtro.toLowerCase()) ||
      c.unidad.toLowerCase().includes(this.filtro.toLowerCase()) ||
      c.extension.includes(this.filtro)
    );
  }
}
