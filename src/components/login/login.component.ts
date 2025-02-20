import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [HttpClient],
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  loginService = inject(LoginService);

  ngOnInit() {
    localStorage.setItem('token', '');
  }

  username = signal<string>('');
  password = signal<string>('');

  onValueChange = (event: any, type: string) => {
    if (type === 'username') {
      this.username.set(event.target.value);
    } else {
      this.password.set(event.target.value);
    }
  };

  onLogin = () => {
    this.loginService
      .login({ username: this.username(), password: this.password() })
      .subscribe((res: any) => {
        if (res.status === true) {
          localStorage.setItem('token', res.token);
          this.router.navigateByUrl('/index');
        } else {
          alert('Invalid Credentials');
        }
      });
  };
}
