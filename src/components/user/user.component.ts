import { Component, inject, signal } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers: [HttpClient],
})
export class UserComponent {
  router = inject(Router);
  loginService = inject(LoginService);
  data = signal<any>({ email: '', phone: '', password: '' });

  onValueChange = (event: any, type: string) => {
    if (type === 'email') {
      this.data.set({ ...this.data(), email: event?.target.value });
    } else if (type === 'phone') {
      this.data.set({ ...this.data(), phone: event?.target.value });
    } else if (type === 'password') {
      this.data.set({ ...this.data(), password: event?.target.value });
    }
  };

  onSignUp = () => {
    this.loginService.saveUserData(this.data()).subscribe((res: any) => {
      if (res) {
        this.router.navigate(['/login']);
      }
    });
  };

  alreadyHaveAnAccount = () => {
    this.router.navigate(['/login']);
  };
}
