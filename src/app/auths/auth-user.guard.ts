import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs'
import { FireStoreUserService } from '../cores/services/fire-store-user.service';

// @Injectable({ providedIn: 'root' })
// export class AuthUserGuard implements CanActivate {

//   constructor(private userService: FireStoreUserService, private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean | Promise<boolean> {
//     if (this.userService.loginUser.getValue()) return true
//     this.router.navigateByUrl('user/login')
//     return false
//   }
// }

export const authUserGuard: CanActivateFn = (route, state) => {
  const userService = inject(FireStoreUserService)
  const router = inject(Router)
  
  const user = localStorage.getItem('user');
  if(user){
    const userLogined = JSON.parse(user);
    userService.loginUser.next(userLogined);
    return true;
  }
  router.navigateByUrl('user/login')
  return false;
};
