import { inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { AuthService } from '.';
import { map, take } from 'rxjs';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
   const authService = inject(AuthService);
   const router = inject(Router);

   return authService.currUser.pipe(
    take(1),
    map((user) => {
      const isAuth = !!user;

      if (isAuth) {
        if (route.routeConfig?.path === 'auth'){
          return router.createUrlTree(['/hourForm']);
        }
        return true;
      } else {
        if (route.routeConfig?.path === 'auth') {
          return true;
        }
        return router.createUrlTree(['/auth']);
      }
    })
   );
};
