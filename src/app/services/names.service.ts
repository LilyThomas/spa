import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {OAuthService} from "angular-oauth2-oidc-codeflow-pkce";

@Injectable()
export class NamesService {

  namesApiUrl: string = 'http://localhost:3000';
  authHeaders: HttpHeaders;
  token: string;

  constructor(private http: HttpClient,
              private oauthService: OAuthService) {
  }

  //get names
  getNames(): Observable<string[]>{
    this.token = this.oauthService.getIdToken();
    this.authHeaders = new HttpHeaders().set('Authorization', "Bearer " + this.token);
    let url = `${this.namesApiUrl}`;
    // console.error(url);
    // console.error(this.authHeaders);
    // console.error(this.http.get<string[]>(url));
    // return this.http.get<string[]>(url);
    return this.http.get<string[]>(url, {headers: this.authHeaders});
  }
}
