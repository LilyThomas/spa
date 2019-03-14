import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {map, catchError, tap} from "rxjs/internal/operators";

@Injectable()
export class NamesService {

  constructor(private http: HttpClient) {
  }


  getNames(){
    return "Lily Thomas & Simon Put";
  }

}
