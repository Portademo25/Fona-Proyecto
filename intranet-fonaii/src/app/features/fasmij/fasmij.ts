import { Component } from '@angular/core';

@Component({
  selector: 'app-fasmij',
  imports: [],
  templateUrl: './fasmij.html',
  styleUrl: './fasmij.scss',
  standalone: true
})
export class Fasmij {
    public pilares = [
    {
      titulo: 'Salud Integral',
      descripcion: 'Acceso a consultas médicas, exámenes de laboratorio, odontología y servicios de emergencia.',
      icono: '🩺'
    },
    {
      titulo: 'Previsión Social',
      descripcion: 'Respaldo financiero y asistencia en casos de contingencias de salud para el titular y sus beneficiarios.',
      icono: '🛡️'
    },
    {
      titulo: 'Bienestar Común',
      descripcion: 'Programas de recreación, cultura y apoyo social para mejorar la calidad de vida del trabajador.',
      icono: '✨'
    }
  ];

  public pasos = [
    { n: '1', accion: 'Censo y Registro', detalle: 'Estar debidamente registrado en la base de datos de Gestión Humana.' },
    { n: '2', accion: 'Solicitud', detalle: 'Presentar el récipe médico o requerimiento ante la oficina de FASMIJ-FONA.' },
    { n: '3', accion: 'Validación', detalle: 'El equipo técnico verifica la cobertura y emite la orden o carta aval.' },
    { n: '4', accion: 'Atención', detalle: 'Dirigirse al centro de salud o servicio asignado con su cédula.' }
  ];
}
