import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-systems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './systems.html',
  styleUrl: './systems.scss'
})
export class Systems {
  public systems = [
    {
      name: 'Correo Institucional',
      description: 'Acceso principal a tu buzón de voz y mensajería oficial.',
      icon: '✉️',
      url: 'https://192.168.6.23'
    },
    {
      name: 'Archivo',
      description: 'Gestión y consulta de documentos digitalizados.',
      icon: '📂',
      url: 'http://192.168.3.25/correspondencia/'
    },
    {
      name: 'SIGESP',
      description: 'Sistema de Información y Gestión del Empleo Público.',
      icon: '🏢',
      url: 'https://192.168.6.138/sigesp_v4_fona/'
    },
    {
      name: 'SIGESP Consulta',
      description: 'Módulo de visualización y reportes administrativos.',
      icon: '🔍',
      url: 'http://192.168.6.126/sigesp_v4_fona/'
    },
    {
      name: 'RECOSUP Consulta',
      description: 'Portal de consultas de recaudación y soporte.',
      icon: '💰',
      url: 'https://192.168.3.3/app/#/admin-recosup'
    },
    {
      name: 'Zimbra Consulta',
      description: 'Herramienta de consulta para servicios de mensajería.',
      icon: '☁️',
      url: 'https://192.168.5.3'
    },
    {
      name: 'Fona-SIGAT',
      description: 'Sistema Integrado de Gestión Administrativa y Tributaria.',
      icon: '🛡️',
      url: 'https://funcionarios-parafiscal.sigat.net/?institucion=2'
    },
    {
      name: 'SIGH ',
      description: 'Sistema de Gestión de Recursos Humanos.',
      icon: '👥',
      url: 'http://192.168.6.248',
    },

  ];

  goToSystem(url: string) {
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      alert('Este sistema estará disponible próximamente en la red interna.');
    }
  }
}
