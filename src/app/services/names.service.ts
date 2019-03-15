import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {OAuthService} from "angular-oauth2-oidc-codeflow-pkce";

@Injectable()
export class NamesService {
// student code start
  namesApiUrl: string = 'https://names-express.herokuapp.com/';
  authHeaders: HttpHeaders;
  token: string;

  constructor(private http: HttpClient,
              private oauthService: OAuthService) {
  }

  //get names
  getNames(): Observable<string[]>{
    this.token = this.oauthService.getIdToken();
    // console.error(this.oauthService.getAccessToken());
    // console.error(this.oauthService.getAuthorizationHeader());

    this.authHeaders = new HttpHeaders().set('Authorization', "Bearer " + this.token);
    // this.authHeaders = new HttpHeaders().set('Authorization', this.oauthService.getAuthorizationHeader());
    // this.authHeaders = new HttpHeaders().set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFUVkVOelk0UWpFek5qUXpOREpETlVFMU56SkVSVEl6TTBOQ1F6YzBRMEpDTmtWRFFqQkJNZyJ9.eyJpc3MiOiJodHRwczovL3BldHRpbmRlci5ldS5hdXRoMC5jb20vIiwic3ViIjoiU29MSDF2V054VlRHNmpLcWhqWDRsa1Q5Z01kYktnTXZAY2xpZW50cyIsImF1ZCI6InJldHVybm5hbWVzLmNvbSIsImlhdCI6MTU1MjU5OTk1OCwiZXhwIjoxNTUyNjg2MzU4LCJhenAiOiJTb0xIMXZXTnhWVEc2aktxaGpYNGxrVDlnTWRiS2dNdiIsInNjb3BlIjoiYXBuYW1lLnJlYWQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.nQLeAhFXzav9ZCzkPE-zpgfHVIyLElz5OV0CETZrjyi45LfvxVdVheT8UCAvDt4CQ-R6QUK2nx8KRCTa3IoAGxBJB6oXmtteX70QdK3FFD29P2qLtHahUR770HPUDYn9TzVSjmMvuRDE9Toxjc1P5gLh6EA79fMNT-1tGN6QRi-TdR_DLTPDCogGRFzfEAssvcsbEGrqHKIJF6uGs4YFsY-0r8evQqONt-89Twph2i06llbl9crTaKoriYrd7I_g_T4BfKcFL-OTJ24cPek34o86S9zQFfW9vxBrC3gBK58TCsQJZEA9WzvauBH1O6RSA2DhkFAkuJK-eGjMwfeKAA");
    // this.authHeaders = new HttpHeaders().set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFUVkVOelk0UWpFek5qUXpOREpETlVFMU56SkVSVEl6TTBOQ1F6YzBRMEpDTmtWRFFqQkJNZyJ9.eyJnaXZlbl9uYW1lIjoiTGlseSIsImZhbWlseV9uYW1lIjoiVGhvbWFzIiwibmlja25hbWUiOiJhbm5lbGllc3Rob21hczk0IiwibmFtZSI6IkxpbHkgVGhvbWFzIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tLUZ0NkV5NTdBTnMvQUFBQUFBQUFBQUkvQUFBQUFBQUFBZFEvVEZERmlsU3pwbzQvcGhvdG8uanBnIiwiZ2VuZGVyIjoiZmVtYWxlIiwibG9jYWxlIjoibmwiLCJ1cGRhdGVkX2F0IjoiMjAxOS0wMy0xNFQyMjoyMzo0MC4yNDJaIiwiZW1haWwiOiJhbm5lbGllc3Rob21hczk0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL3BldHRpbmRlci5ldS5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTMwOTA3NzgwNjI1OTM4OTg4NDkiLCJhdWQiOiI2N1RETk9aTzVabGFUTFdQMjYwN0Y2ZGFvVkJUdXBRcyIsImlhdCI6MTU1MjYwMjIyMCwiZXhwIjoxNTUyNjM4MjIwLCJhdF9oYXNoIjoieVduRWNTOE8yVjVBek9WLUZQVEtaQSIsIm5vbmNlIjoiTWxJY3NRdzlIcVRmd0hLMG82QTFGNGtWdFJJbkpmOWlJYjhNTE5hSSJ9.ealgQtzd-QJrUGhifQke2RKjN8zg-ohVSkyPD-tv3MVk7xoBNBgBRem7aPC783kKakOm5l90aKdvgtqHLywPyxu00qZfCwdeGCTBL3hZr5gEcE0OSwCxjiyciuaQu-QLnHYUG_7PmUOyDEca4KCIhaDcEva40s0gihQxbJsjsctbiao9WzKiOqIrw5PqG-GuLL93R1BXynH5mEEaikZwRQ86J4ELbZToCBDSuuXOyWu9OLcHlIGXzg6QGbsmO3");
    // console.error(this.token);
    let url = `${this.namesApiUrl}`;
    // console.error(url);
    // console.error(this.authHeaders);
    // console.error(this.http.get<string[]>(url));
    // return this.http.get<string[]>(url);
    return this.http.get<string[]>(url, {headers: this.authHeaders});
  }

  // student code end
}
