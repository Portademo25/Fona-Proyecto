import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Revisa si hay sesión activa. Si no la hay, lo manda al login.
  return authService.isLogged$.pipe(
    take(1),
    map(isLogged => {
      if (isLogged) return true;
      return router.createUrlTree(['/login']);
    })
  );
};
