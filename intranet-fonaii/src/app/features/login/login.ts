import { Component, OnInit } from '@angular/core'; // Añadido OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import Swal from 'sweetalert2'; // Asegúrate de instalarlo con: npm install sweetalert2

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit { // Implementamos OnInit
  public credentials = {
    username: '',
    password: ''
  };

  public errorMessage: string = '';
  public isLoading: boolean = false;
  public loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Se ejecuta al cargar el componente
    this.mostrarAvisoInstitucional();
  }

  private mostrarAvisoInstitucional() {
    Swal.fire({
      title: '<strong>Información de Acceso</strong>',
      icon: 'info',
      html:
        'Para ingresar a la Intranet FONA, debe utilizar su ' +
        '<b>correo institucional</b> con la misma contraseña del ' +
        '<b>Portal SIGH</b>.',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#6366f1',
      allowOutsideClick: false, // Obliga al usuario a leer y darle a "Entendido"
      backdrop: `rgba(99, 102, 241, 0.1)`
    });
  }

  onLogin() {
    if (!this.credentials.username || !this.credentials.password) {
      this.triggerError('Por favor, rellene todos los campos');
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.loginError = false;

    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log('Acceso concedido al sistema SIGH');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.isLoading = false;

        if (err.status === 401) {
          this.triggerError('Credenciales incorrectas. Verifique su correo y contraseña SIGH.');
        } else {
          this.triggerError('Error de conexión con el servidor FONA');
        }
      }
    });
  }

  private triggerError(message: string) {
    this.errorMessage = message;
    this.loginError = true;
    setTimeout(() => {
      this.loginError = false;
    }, 400);
  }

  get isEmailValid(): boolean {
  const email = this.credentials.username.toLowerCase();
  return email.endsWith('@fona.gob.ve') && email.length > 12;
}
}
