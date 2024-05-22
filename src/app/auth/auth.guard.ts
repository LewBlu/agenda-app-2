import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)

  return authService.userDetails$.pipe(map((user) => {
    if(user) {
      return true;
    }
    return router.parseUrl('/login');
  }));
};
