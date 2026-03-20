import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manuals',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manuals.html',
  styleUrl: './manuals.scss'
})
export class Manuals {
  public manuals = [
    {
      id: 1,
      title: 'Atencion al Ciudadano',
      version: 'v2.0',
      date: '07/12/2016',
      size: '5.2 MB',
      fileName: 'ATENCION_AL_CIUDADANO.pdf' // Nombre real del archivo en assets
    },
    {
      id: 2,
      title: 'Compras de Administracion y Finanzas',
      version: 'v2.0',
      date: '17/11/2016',
      size: '12.5 MB',
      fileName: 'COMPRAS_DE_ADMINISTRACION_Y_FINANZAS.pdf' // Nombre real del archivo en assets
    },
    {
      id: 3,
      title: 'Manual de Contabilidad y Finanzas',
      version: 'v3.5',
      date: '17/11/2016',
      size: '9.4 MB',
      fileName: 'CONTABILIDAD_-ADMINISTRACION_Y_FINANZAS.pdf'
    },
    {
      id: 4,
      title: 'Coordinacion de Contabilidad Elaboracion de Viaticos y Pasajes',
      version: 'v2.0',
      date: '17/11/2016',
      size: '9.0 MB',
      fileName: 'COORDINACIÓN_DE-CONTABILIDAD_ELABORACION_DE_VIATICOS_Y_PASAJES.pdf'
    },
    {
      id: 5,
      title: 'Coordinacion de Ejecucion de Proyectos Especiales',
      version: 'v2.0',
      date: '17/11/2016',
      size: '21.6 MB',
      fileName: 'COORDINACIÓN-DE-EJECUCION-DE-PROYECTOS-ESPECIALES-DE-LA-DIRECCION-DE-ADMINISTRACION-Y-FINANZAS.pdf'
    },
      {
      id: 6,
      title: 'Coordinacion de Finanzas De la Direccion de Administracion y Finanzas',
      version: 'v2.0',
      date: '17/11/2016',
      size: '10.7 MB',
      fileName: 'COORDINACIÓN-DE-FINANZAS-DE-DIRECCION-DE-ADMINISTRACION-Y-FINANZAS.pdf',
    },
      {
      id: 7,
      title: 'Correspondencia y Archivo',
      version: 'v2.0',
      date: '07/12/2016',
      size: '8.3 MB',
      fileName: 'CORRESPONDENCIA-Y-ARCHIVO-CENTRAL.pdf'
    },
      {
      id: 8,
      title: 'Direccion de Capacitacion y Adistracion de Personal',
      version: 'v2.0',
      date: '17/11/2016',
      size: '15.4 MB',
      fileName: 'DIRECCIÓN-DE-CAPACITACION-Y-ADISTRAMIENTO.pdf',
    },
      {
      id: 9,
      title: 'Direccion de Fiscalizacion de Contribuyentes',
      version: 'v2.0',
      date: '07/12/2016',
      size: '13.9 MB',
      fileName: 'DIRECCIÓN-DE-FISCALIZACIÓN-DE-CONTRIBUYENTES.pdf'
    },
      {
      id: 10,
      title: 'Direccion de Gestion y Evaluacion de Proyectos',
      version: 'v2.0',
      date: '07/12/2016',
      size: '5.7 MB',
      fileName: 'DIRECCIÓN-DE-GESTIÓN-Y-EVALUACIÓN-DE-PROYECTOS.pdf'
    },
        {
      id: 11,
      title: 'Direccion de Recaudacion y Administracion Financiera',
      version: 'v2.0',
      date: '07/12/2016',
      size: '22.4 MB',
      fileName: 'DIRECCIÓN-DE-RECAUDACIÓN-Y-ADMINISTRACIÓN-FINANCIERA.pdf'
    },
          {
      id: 12,
      title: 'Manual Maestro',
      version: 'v1.0',
      date: '18/08/2017',
      size: '11.4 MB',
      fileName: 'MANUAL-MAESTRO-PUNTO-N°-0243.pdf'
    },
      {
      id: 13,
      title: 'Oficina de Asesoria Legal',
      version: 'v2.0',
      date: '07/12/2016',
      size: '12.2 MB',
      fileName: 'OFICINA-DE-ASESORÍA-LEGAL.pdf'
    },
        {
      id: 14,
      title: 'Planificacion Presupuestoria y Control de Gestion',
      version: 'v2.0',
      date: '07/12/2016',
      size: '10.5 MB',
      fileName: 'PLANIFICACIÓN-PRESUPUESTORIA-Y-CONTROL-DE-GESTIÓN.pdf'
    },
          {
      id: 15,
      title: 'Recursos Humanos',
      version: 'v2.0',
      date: '07/12/2016',
      size: '10.6 MB',
      fileName: 'RECURSOS-HUMANOS.pdf'
    },
          {
      id: 16,
      title: 'Red Nacional',
      version: 'v2.0',
      date: '07/12/2016',
      size: '6.6 MB',
      fileName: 'RED-NACIONAL.pdf'
    },
    {
      id: 17,
      title: 'Sistemas y Tecnologia de la Informacion',
      version: 'v2.0',
      date: '07/12/2016',
      size: '5.2 MB',
      fileName: 'SISTEMAS-Y-TENOLOGÍA-DE-LA-INFORMACIÓN.pdf'
    }

  ];

  downloadManual(manual: any) {
  const link = document.createElement('a');

  // Como están en la carpeta 'public/manuales/', la URL del navegador es:
  link.href = `./manuales/${manual.fileName}`;

  link.download = manual.fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
}
