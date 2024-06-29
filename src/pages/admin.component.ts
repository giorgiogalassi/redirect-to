import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AuthService } from '../providers/auth.service';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
  <h1>Welcome {{auth.username}}!</h1>
  <nav>
    <a routerLink="/login" routerLinkActive="active" ariaCurrentWhenActive="page">Login</a>
  </nav>
  `,
})
export class AdminComponent {
  auth = inject(AuthService);
}
