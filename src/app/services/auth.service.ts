import {Injectable} from '@angular/core';
import { AuthConfig } from "angular-oauth2-oidc-codeflow-pkce"

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://pettinder.eu.auth0.com/',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '67TDNOZO5ZlaTLWP2607F6daoVBTupQs',

  oidc: true,

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email',
}

@Injectable()
export class AuthService {

  constructor(){}
}
