import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwksValidationHandler, OAuthService} from "angular-oauth2-oidc-codeflow-pkce";
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

  iframeUrl = "/framebox";

  constructor(private oauthService: OAuthService, private router: Router){
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initAuthorizationCodeFlow();
    // this.oauthService.initImplicitFlow();
    logger.debug(this.oauthService.getIdToken());
  }

  logout() {
    this.oauthService.logOut();
    this.router.navigate(['']);
  }

  isAuthenticated() {
    return new Date().getTime() < this.oauthService.getAccessTokenExpiration();
  }
}
