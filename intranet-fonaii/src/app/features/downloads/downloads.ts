import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './downloads.html',
  styleUrl: './downloads.scss'
})
export class Downloads {
  // Datos de prueba (Luego vendrán de tu Base de Datos SIGH)
  public documents = [
    { id: 1, title: 'Recibo de Pago - Febrero 2026', date: '28/02/2026', type: 'PDF', size: '1.2 MB' },
    { id: 2, title: 'Constancia de Trabajo Digital', date: '10/03/2026', type: 'PDF', size: '850 KB' },
    { id: 3, title: 'Manual de Usuario - Nueva Intranet', date: '12/03/2026', type: 'PDF', size: '3.5 MB' },
  ];

  downloadFile(doc: any) {
    console.log('Descargando:', doc.title);
    // Aquí irá la lógica para llamar a tu backend de NestJS
    alert(`Iniciando descarga de: ${doc.title}`);
  }
}
