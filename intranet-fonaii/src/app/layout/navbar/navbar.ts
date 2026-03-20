import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Observable } from 'rxjs';

interface NavLink {
  label: string;
  route: string;
  requiereLogin: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {

  public isMenuOpen: boolean = false;
  // Inicializamos con valores vacíos, se llenarán en el ngOnInit
  public user = {
    displayName: '', // Nombre formateado
    role: '',
    avatar: ''
  };

  public navLinks: NavLink[] = [
    { label: 'Inicio', route: '/home', requiereLogin: false },
    { label: 'Estructura', route: '/estructura', requiereLogin: false },
    { label: 'FASMIJ', route: '/fasmij', requiereLogin: false },
    { label: 'Directorio', route: '/directorio', requiereLogin: false },
    { label: 'Sistemas', route: '/mis-sistemas', requiereLogin: true },
    { label: 'Formatos ', route: '/mis-descargas', requiereLogin: true },
  ];

  public isLogged$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isLogged$ = this.authService.isLogged$;
  }

 ngOnInit() {
    this.isLogged$.subscribe(logged => {
      if (logged) {
        const userData = localStorage.getItem('user_data');
        if (userData) {
          const parsed = JSON.parse(userData);

          // Formateamos el nombre: de 'jrodriguez@fona.gob.ve' a 'J. RODRIGUEZ'
          this.user.displayName = this.formatUserName(parsed.username || 'USUARIO');
          this.user.role = parsed.role || 'PERSONAL FONA';

          // Avatar con iniciales usando UI-Avatars (Colores FONA: Indigo/Blanco)
          this.user.avatar = `https://ui-avatars.com/api/?name=${this.user.displayName}&background=6366f1&color=fff&bold=true`;
        }
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Si el usuario hace clic fuera o sale, cerramos el menú
  closeMenu() {
    this.isMenuOpen = false;
  }

  onLogout() {
   this.authService.logout();
    this.closeMenu();
  }

  private formatUserName(email: string): string {
    if (!email.includes('@')) return email.toUpperCase();

    // Extraemos la parte antes del @
    const namePart = email.split('@')[0];
    const initial = namePart.charAt(0).toUpperCase();
    const lastName = namePart.substring(1).toUpperCase();

    // Retorna algo como "J. RODRIGUEZ"
    return `${initial}. ${lastName}`;
  }

}
