import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importante
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Tu backend de NestJS

  // Mantenemos tu lógica de BehaviorSubject (¡muy bien hecha!)
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('fona_token'));

  constructor(private http: HttpClient) {}

  get isLogged$() {
    return this.loggedIn.asObservable();
  }

  // Modificamos tu login para que sea una petición real a la base de datos
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: any) => {
        // Guardamos el token y los datos del usuario del SIGH2025
        localStorage.setItem('fona_token', res.access_token);
        localStorage.setItem('user_data', JSON.stringify(res.user));

        this.loggedIn.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('fona_token');
    localStorage.removeItem('user_data');
    this.loggedIn.next(false);
  }
}
