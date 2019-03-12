import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from './services/auth.service';
import { HttpClientModule} from "@angular/common/http";
import {Routes} from "@angular/router";
import {OAuthModule } from "angular-oauth2-oidc-codeflow-pkce";
import { OAuthService, UrlHelperService } from "angular-oauth2-oidc-codeflow-pkce";

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
  providers: [OAuthService, UrlHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
