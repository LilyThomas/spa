import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {JwksValidationHandler, OAuthService} from "angular-oauth2-oidc-codeflow-pkce";
import { authConfig } from "./services/auth.service";
import {logger} from "codelyzer/util/logger";
import {Router} from "@angular/router";
import {NamesService} from "./services/names.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent{
  title = 'Lily\'s & Simon\'s SPA';

  names: any = [];

  constructor(private oauthService: OAuthService,
              private router: Router,
              private nameService: NamesService){
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
    // student code start here
    this.router.navigate(['']);
    // student code end here
  }

  // student code start here
  isAuthenticated() {
    return new Date().getTime() < this.oauthService.getAccessTokenExpiration();
  }

  onNamesClick(){
    this.nameService.getNames().subscribe(data => {
      this.names = data;
    })
  }
  // student code end here
}
