import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `auth-form {
      background-color: rgba(245,245,245, 0.9);
      padding: 1rem;
    }`
  ]
})
export class LoginComponent {
  
  email:    string = '';
  password: string = '';
  
}
