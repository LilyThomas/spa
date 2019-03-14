import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import {OAuthModule } from "angular-oauth2-oidc-codeflow-pkce";
import { OAuthService, UrlHelperService } from "angular-oauth2-oidc-codeflow-pkce";
import {NamesService} from "./services/names.service";
import {AuthInterceptor} from "./services/authInterceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  exports: [
  ],
  providers: [OAuthService, UrlHelperService, NamesService, AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }

