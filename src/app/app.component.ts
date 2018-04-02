import { Component } from '@angular/core';
import { Image } from './image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'F1 Gallery';

  isLoggedIn = false;

  private adminLogin = 'admin';
  private adminPassword = 'admin';

  login() {
    this.isLoggedIn = true;
  }

  signOut() {
    this.isLoggedIn = false;
  }
}
