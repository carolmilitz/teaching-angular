import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.white{color:#fff;}']
})
export class AppComponent {
  passwordVisible = false;
  clicked = 0;
  clicks = [];

    showSecretPassword() {
      this.passwordVisible = !this.passwordVisible;
      this.clicked++;
      this.clicks.push(new Date());
    }
}
