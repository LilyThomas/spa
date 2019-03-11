import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit{
  title = 'Lily & Simon\'s SPA';


  constructor(private auth: AuthService, private http: HttpClient){
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    }
  }


}
