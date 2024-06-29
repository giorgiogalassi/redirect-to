import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

export const Roles = {
  User: 'user',
  Admin: 'admin',
} as const;

export type RolesType = (typeof Roles)[keyof typeof Roles];

type User = {
  isAdmin: boolean;
  name: string;
  surname: string;
  username: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = signal<User | null>(null);

  #router = inject(Router);

  get role(): RolesType {
    return this.user()?.isAdmin ? Roles.Admin : Roles.User;
  }

  get username(): string {
    return this.user()?.username || '';
  }

  isAuth(): boolean {
    return !!this.user();
  }

  isAuthGuard(): boolean {
    const isAuth = this.isAuth();

    if (isAuth) return true;

    this.#router.navigate(['login']);
    return false;
  }

  authAdmin() {
    this.user.set({
      isAdmin: true,
      name: 'Giorgio',
      surname: 'Galassi',
      username: 'ggadmin',
    });
  }

  authUser() {
    this.user.set({
      isAdmin: false,
      name: 'Giorgio',
      surname: 'Galassi',
      username: 'gguser',
    });
  }
}
