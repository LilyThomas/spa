import {Injectable} from '@angular/core';
// import { AuthConfig } from "angular-oauth2-oidc-codeflow-pkce"
import { Router } from "@angular/router";
import * as OktaAuth from '@okta/okta-auth-js';

// export const authConfig: AuthConfig = {
//
//   // Url of the Identity Provider
//   issuer: 'https://pettinder.eu.auth0.com/',
//
//   // URL of the SPA to redirect the user to after login
//   redirectUri: window.location.origin,
//
//   // The SPA's id. The SPA is registerd with this id at the auth-server
//   clientId: '67TDNOZO5ZlaTLWP2607F6daoVBTupQs',
//
//
//
//   // set the scope for the permissions the client should request
//   // The first three are defined by OIDC. The 4th is a usecase-specific one
//   scope: 'openid profile email',
// }

@Injectable()
export class AuthService {


  constructor(private router: Router){

  }

  oktaAuth = new OktaAuth({
    url: 'https://dev-542608.okta.com',
    clientId: '0oacr13u7sLCCvbJL356',
    issuer: 'https://dev-542608.okta.com/oauth2/auscqyqtxwGjIvjY7356'
  });

  async isAuthenticated(){

    return !!(await this.oktaAuth.tokenManager.get('accessToken'));
  }

  login(){
    this.oktaAuth.token.getWithRedirect({
      responseType: ['id_Token', 'token'],
      scopes: ['openid', 'email', 'profile']
    });
  }

  async handleAuthentication(){
    const tokens = await this.oktaAuth.token.parseFromUrl();
    tokens.forEach(token => {
      if (token.idToken) {
        this.oktaAuth.tokenManager.add('idToken', token);
      }
      if (token.accessToken) {
        this.oktaAuth.tokenManager.add('accessToken', token);
      }
    });
  }

  async logout() {
    this.oktaAuth.tokenManager.clear();
    await this.oktaAuth.signOut();
  }
}
