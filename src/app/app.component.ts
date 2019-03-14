import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {JwksValidationHandler, OAuthService} from "angular-oauth2-oidc-codeflow-pkce";
// import { authConfig } from "./services/auth.service";
// import {logger} from "codelyzer/util/logger";
import {Router} from "@angular/router";
// import {NamesService} from "./services/names.service";
import {HttpClient} from "@angular/common/http";
import {OktaAuthService} from "@okta/okta-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent{
  title = 'Lily\'s & Simon\'s SPA';

  names: any = [];

  isAuthenticated: boolean;

  constructor(
              // private oauthService: OAuthService,
              private router: Router,
              // private auth: AuthService,
              private oktaAuth: OktaAuthService
              // private nameService: NamesService,
              // private http: HttpClient
  ){
    // this.configureWithNewConfigApi();

    this.oktaAuth.$authenticationState.subscribe();
  }

  async ngOnInit(){
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  // private configureWithNewConfigApi() {
  //   this.oauthService.configure(authConfig);
  //   this.oauthService.setStorage(localStorage);
  //   this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  //   //https://pettinder.eu.auth0.com/.well-known/jwks.json
  //   this.oauthService.jwks = {"keys":[{"alg":"RS256","kty":"RSA","use":"sig","x5c":["MIIDBzCCAe+gAwIBAgIJLu1k9V2kT/UfMA0GCSqGSIb3DQEBCwUAMCExHzAdBgNVBAMTFnBldHRpbmRlci5ldS5hdXRoMC5jb20wHhcNMTkwMjI1MTI1OTA1WhcNMzIxMTAzMTI1OTA1WjAhMR8wHQYDVQQDExZwZXR0aW5kZXIuZXUuYXV0aDAuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2ZBLDIdHtxQ136t1ITdgigjzWK6Us52RsxdoXAdVkY5fbbXx8FqBh+3+j15IHDHCfJxjZUBEJn5b+DLF/Oxa/HATURPb9YGTrbPKap9Y9TD0yNoHLz/xhiWDjJfgFT/3RIeqKTNQwpXzuDQD16HgY75ko7FaSDhuDonD12PnXr4RjMU04KF4eS60dbzYNTT75Y5GLpzm8kA/XPZb80yEEDAmGHC63l2xAo7oCOsXFt0aLjNqetTP/eVeXXnE3rByoeiPlArDK6OpGXBoS7rYNKbn6YJbunFqIvmgMDp0elCSkbFsKAif9VyLn75/vVBvPAJUcUqINPTjsO+jQvSQ9QIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQdtGlPtRYdpyBC0e5DYQqv9LnAyDAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBADzuU+KuJdYjYSSxlopcBuKU7iLzOcDjQqKfEc3ei4nB9ZT2vNFgNk1UDAHJXABjIfNbD3VgN+I7V9k01dqjZ1/AM0KSrW/Z7T063sgWLEJswx2XETeQ9v4TmcgE+YwkD7TgTYuWl7SeTosWDPVvHrEqWel0AktuOwhBQbi+pUyZCUiEc5i4m8UriyfzaudkVsn+DEq/urYZrN29qF4gbytOI7JKL4dExgHyo3e7siZFJ649njqMXVHOCf4E8t763cxE/ftryrvMlmPG8BtCqziNa3HN8aRcBC8HsHahFzWWQ4Po8qmvlBXn7l7Mnix5+iZtlbaxzyoWCgu88JWG9+k="],"n":"2ZBLDIdHtxQ136t1ITdgigjzWK6Us52RsxdoXAdVkY5fbbXx8FqBh-3-j15IHDHCfJxjZUBEJn5b-DLF_Oxa_HATURPb9YGTrbPKap9Y9TD0yNoHLz_xhiWDjJfgFT_3RIeqKTNQwpXzuDQD16HgY75ko7FaSDhuDonD12PnXr4RjMU04KF4eS60dbzYNTT75Y5GLpzm8kA_XPZb80yEEDAmGHC63l2xAo7oCOsXFt0aLjNqetTP_eVeXXnE3rByoeiPlArDK6OpGXBoS7rYNKbn6YJbunFqIvmgMDp0elCSkbFsKAif9VyLn75_vVBvPAJUcUqINPTjsO-jQvSQ9Q","e":"AQAB","kid":"QTVENzY4QjEzNjQzNDJDNUE1NzJERTIzM0NCQzc0Q0JCNkVDQjBBMg","x5t":"QTVENzY4QjEzNjQzNDJDNUE1NzJERTIzM0NCQzc0Q0JCNkVDQjBBMg"}]};
  //
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();
  // }

  login() {
    // if (!this.oauthService.hasValidAccessToken()) {
    //   // this.oauthService.initAuthorizationCodeFlow();
    //   this.oauthService.initImplicitFlow();
    // }
    // // this.oauthService.initAuthorizationCodeFlow();
    // // this.oauthService.initImplicitFlow();
    console.error("login");
    this.router.navigateByUrl('/login');
    // this.oktaAuth.loginRedirect('/profile');
  }

  async logout() {
    // this.oauthService.logOut();
    // // student code start here
    // this.router.navigate(['']);
    // // student code end here
    await this.oktaAuth.logout();
    this.router.navigateByUrl('/');
  }

  // student code start here
  // isAuthenticated() {
    // console.debug(this.oauthService.getAccessToken());
    // return new Date().getTime() < this.oauthService.getAccessTokenExpiration();
  // }

  // onNamesClick(){
    // console.error(localStorage.getItem("id_token"));
    // console.error(localStorage.getItem("access_token"));
    // console.log("hallo");
    // console.info("hallo");
    // this.http.get(this.nameService)

    // getNames().subscribe(data => {
    //   this.names = data;
    // })
  // }


  // student code end here
}
