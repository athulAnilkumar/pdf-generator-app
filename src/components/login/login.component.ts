import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environment/environment';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  router = inject(Router);

  ngOnInit() {
    localStorage.setItem('token', '');
  }

  username = signal<string>('');
  password = signal<string>('');

  usern = 'athul';
  pass = 'athul';

  onValueChange = (event: any, type: string) => {
    if (type === 'username') {
      this.username.set(event.target.value);
    } else {
      this.password.set(event.target.value);
    }
  };

  onLogin = () => {
    if (this.username() === this.usern && this.password() === this.pass) {
      localStorage.setItem('token', 'thisIsMyTOKEN');
      this.router.navigate(['/index']);
    }
  };
}
