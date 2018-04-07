import { Component } from '@angular/core';
import { Image } from './image';

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

  login(login: string, password: string) {
    this.credentials.forEach((value: string, key: string, map: Map<string, string>) => {
      if (this.compareCredentials(key, login) && this.compareCredentials(value, password)) {
        this.isLoggedIn = true;
      }
    });

    if (this.compareCredentials(this.adminLogin, login) && this.compareCredentials(this.adminPassword, password)) {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
  }

  signOut() {
    this.isLoggedIn = false;
  }

  private compareCredentials(expected: string, given: string): boolean {
    return expected.toLocaleLowerCase().localeCompare(given.toLocaleLowerCase()) === 0;
  }
}
