import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-generales',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './generales.html',
  styleUrl: './generales.scss'
})
export class Generales {
  // Lista de formatos de uso general
  public formats = [
    {
      id: 1,
      title: 'Instructivo',
      size: '827.9 KB',
      fileName: 'INSTRUCTIVO.doc'
    },
    {
      id: 2,
      title: 'Memorándum',
      size: '240.3 KB',
      fileName: 'MEMO.docx'

    },
    {
      id: 3,
      title: 'Minuta',
      size: '810.0 KB',
      fileName: 'MINUTA.doc'
    },
    {
      id: 4,
      title: 'Oficio',
      size: '357.0 KB',
      fileName: 'OFICIO.docx'
    },
    {
      id: 5,
      title: 'Punto de Cuenta ',
      size: '704 KB',
      fileName: 'PTO_CUENTA.doc'
    },
      {
      id: 6,
      title: ' Punto de Información',
      size: '128 KB',
      fileName: 'PTO_INFORMACIN.doc'
      },
      {
      id: 7,
      title: 'Punto de Cuenta al Consejo Directivo',
      size: '153.1 KB',
      fileName: 'PUNTO_DE_CUENTA_AL_CONSEJO_DIRECTIVO.doc'
      }
  ];


  downloadGeneral(doc: any) {
    const link = document.createElement('a');

    // Asumiendo que creaste la carpeta 'formatos' dentro de 'public'
    // Usamos encodeURI para manejar los espacios en blanco de tus archivos
    const folderPath = './Formatos/';
    link.href = encodeURI(`${folderPath}${doc.fileName}`);

    link.download = doc.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
