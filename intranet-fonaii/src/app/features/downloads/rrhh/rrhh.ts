import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rrhh',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rrhh.html',
  styleUrl: './rrhh.scss'
})
export class Rrhh {
  public formats = [
    {
      id: 1,
      title: 'Normativas y Condiciones de Trabajo',
      size: '1.3 MB',
      fileName: 'Normativa y de condiciones de trabajo .pdf'
    },
    {
      id: 2,
      title: 'Orden de Servicio para Personal',
      size: '307.2 KB',
      fileName: 'Orden de Servicio.pdf'
    },
    {
      id: 3,
      title: 'Permiso del Personal',
      size: '297.8 KB',
      fileName: 'Permiso.pdf'
    },
    {
      id: 4,
      title: 'Permiso Extendido del Personal',
      size: '122 KB',
      fileName: 'permiso_extendido formato nuevo.docx'
    },
    {
      id: 5,
      title: 'Planilla de Suscripción FASMIJ',
      size: '497.7 KB',
      fileName: 'Planilla de Suscripción FASMIJ Vigente.pdf'
    }
  ];

  downloadFormat(doc: any) {
    const link = document.createElement('a');

    // Asumiendo que creaste la carpeta 'formatos' dentro de 'public'
    // Usamos encodeURI para manejar los espacios en blanco de tus archivos
    const folderPath = './Formatos/formatos rrhh/';
    link.href = encodeURI(`${folderPath}${doc.fileName}`);

    link.download = doc.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
