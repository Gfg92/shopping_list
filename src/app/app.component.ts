import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping_list';

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyAnqLPbPVpeVEDYNCqDBOyzBsbzc6UjTVY",
      authDomain: "db-article.firebaseapp.com",

    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

}
