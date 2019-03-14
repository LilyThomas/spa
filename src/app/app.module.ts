import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
// import {OAuthModule } from "angular-oauth2-oidc-codeflow-pkce";
import { OAuthService, UrlHelperService } from "angular-oauth2-oidc-codeflow-pkce";
import {NamesService} from "./services/names.service";
import {AuthService} from "./services/auth.service";
// import {AuthGuard} from "./services/auth.guard";
// import {CallbackComponent} from "./callback.component";
import {ProtectedComponent} from "./protected.component";
import {OktaAuthModule, OktaCallbackComponent, OktaAuthGuard} from "@okta/okta-angular";
import { LoginComponent } from "./login.component";
import {RouterModule, Routes} from "@angular/router";

const config = {
  clientId: '0oacr13u7sLCCvbJL356',
  issuer: 'https://dev-542608.okta.com/oauth2/auscqyqtxwGjIvjY7356',
  redirectUri: window.location.origin,
  idps: {type: 'GOOGLE', id: '12296744458-1m6bc259roj8i11e0lnuqk6bfe4htc9s.apps.googleusercontent.com'}

};

export function  onAuthRequired({oktaAuth, router}){
  router.navigate(['/login']);
}

const appRoutes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    // CallbackComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    OktaAuthModule.initAuth(config),
    RouterModule.forRoot(appRoutes)
    // OAuthModule.forRoot()
  ],
  exports: [
  ],
  providers: [OAuthService, UrlHelperService, NamesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

