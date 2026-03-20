import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnologia',
  imports: [CommonModule],
  templateUrl: './tecnologia.html',
  styleUrl: './tecnologia.scss',
  standalone: true
})
export class TecnologiaComponent {
  serviciosTecnicos = [
    {
      titulo: 'Soporte y Hardware',
      icono: '🔧',
      descripcion: 'Mantenimiento preventivo y correctivo de equipos de computación, impresoras y periféricos.',
      items: ['Reparación de equipos', 'Instalación de periféricos', 'Limpieza técnica']
    },
    {
      titulo: 'Sistemas y Desarrollo',
      icono: '⚙️',
      descripcion: 'Administración de la Intranet, bases de datos y creación de herramientas digitales internas.',
      items: ['Gestión de usuarios', 'Desarrollo de módulos', 'Base de datos']
    },
    {
      titulo: 'Redes y Conectividad',
      icono: '🌐',
      descripcion: 'Garantizamos la conexión a internet y el acceso a los servidores internos de forma estable.',
      items: ['Configuración de WiFi', 'Puntos de red', 'Correo institucional']
    },
    {
      titulo: 'Seguridad Informática',
      icono: '🛡️',
      descripcion: 'Protección contra amenazas digitales, gestión de antivirus y respaldos de información.',
      items: ['Antivirus', 'Respaldo de archivos (Backup)', 'Ciberseguridad']
    }
  ];
}
