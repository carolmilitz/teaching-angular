import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordVisible = false;
  clicked = 0;
  clicks = [];

    showSecretPassword() {
      this.passwordVisible = !this.passwordVisible;
      this.clicked++;
      this.clicks.push(this.clicked);
    }
}
