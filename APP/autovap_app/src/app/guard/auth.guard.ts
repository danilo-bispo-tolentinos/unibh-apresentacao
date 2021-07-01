import { Injectable, Component, ComponentDecorator } from '@angular/core';
import { Router, CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';



@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       if (this.authenticationService.isAuthenticated()) {
             return true;
         } else {
             if (state.url != '/login') {
                 this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
             }
             return false;
        }


    }

    canLoad(route: Route): boolean {
        return true;
    }
}
