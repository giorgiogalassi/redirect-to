import { Component, inject } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  template: `
  <h3>Please choice how you want to Login!</h3>
  <div class='login__actions'>
    <button (click)='authAsAdmin()'>Login as Admin</button>
    <button (click)='authAsUser()'>Login as User</button>
  </div>
  `,
  styles: `
  .login__actions {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 8px;
  }

  h3 {
    text-align: center;
  }
  `,
})
export class LoginComponent {
  #auth = inject(AuthService);
  #router = inject(Router);

  authAsAdmin(): void {
    this.#auth.authAdmin();
    this.#router.navigateByUrl('');
  }

  authAsUser(): void {
    this.#auth.authUser();
    this.#router.navigateByUrl('');
  }
}
