import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwksValidationHandler, OAuthService} from "angular-oauth2-oidc";
import { authConfig } from "./services/auth.service";
import {logger} from "codelyzer/util/logger";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent{
  title = 'Lily\'s & Simon\'s SPA';

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  constructor(private oauthService: OAuthService, private router: Router){
    this.configureWithNewConfigApi();
      this._idToken = '';
      this._accessToken = '';
      this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // Call this.oauthService.tryLogin() if discovery document is not used.
    // All configurations must be set manually.
  }

  login() {
    logger.debug("hello");
    this.oauthService.loadDiscoveryDocumentAndLogin().then(data => {
      console.log("Logged in");
      localStorage.setItem('isLoggedIn', 'true');
      // const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
      console.log(this.oauthService.getAccessTokenExpiration());
      // this._accessToken = this.oauthService.getAccessToken();
      // this._idToken = this.oauthService.getIdToken();
      // this._expiresAt = this.oauthService.getAccessTokenExpiration();
      this.router.navigate(['']);
      this.oauthService.initImplicitFlow();
    }).catch(err => {
      console.log("Unable to login");
    });
    logger.debug(this.oauthService.getIdToken());
  }

  logout() {
    this.oauthService.logOut();
    console.log("Logged out");
  }

  isAuthenticated() {
    return new Date().getTime() < this.oauthService.getAccessTokenExpiration();
  }


}
