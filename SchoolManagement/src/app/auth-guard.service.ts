import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  authenticated = false;
  constructor(private router: Router) { }

  canActivate(route): boolean {

    if (!this.authenticated) {
      this.router.navigate(['accountSelector']);
      return false;
    }
    return true;
  }

}
