import { Component } from '@angular/core';
import { Image } from './image';
import { MatSnackBar } from '@angular/material/snack-bar';
import { compare } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'F1 Gallery';

  credentials = new Map([['user', 'password'], ['notadmin', 'notadmin'], ['batman', 'jokerisdead']]);

  isLoggedIn = false;
  isAdmin = false;

  private adminLogin = 'admin';
  private adminPassword = 'admin';

  constructor(public snackbar: MatSnackBar) { }

  login(login: string, password: string) {
    this.credentials.forEach((value: string, key: string, map: Map<string, string>) => {
      if (compare(key, login) && compare(value, password)) {
        this.isLoggedIn = true;
        this.snackbar.open(`Hello!`);
      }
    });

    if (compare(this.adminLogin, login) && compare(this.adminPassword, password)) {
      this.isLoggedIn = true;
      this.isAdmin = true;
      this.snackbar.open(`All hail to the admin!`);
    }
  }

  signOut() {
    this.isLoggedIn = false;
    if (this.isAdmin) {
      this.isAdmin = false;
    }

    this.snackbar.open(`Bye!`);
  }
}
