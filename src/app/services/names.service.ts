import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {map, catchError, tap} from "rxjs/internal/operators";

@Injectable()
export class NamesService {

  jsonUrl: string = "/assets/names.json";


  constructor(private http: HttpClient) {
  }

  getNames(){
    return this.http.get(this.jsonUrl);
  }
}
