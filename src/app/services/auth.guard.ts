// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import {AuthService} from "./auth.service";
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//   oktaAuth;
//   authenticated;
//
//   constructor(private okta: AuthService, private router: Router) {
//     this.authenticated = okta.isAuthenticated()
//     this.oktaAuth = okta;
//   }
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (this.authenticated) { return true; }
//
//     // Redirect to login flow.
//     this.oktaAuth.login();
//     return false;
//   }
// }
