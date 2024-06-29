import { inject } from '@angular/core';
import { Routes } from '@angular/router';

import { AuthService, Roles, RolesType } from './providers/auth.service';

import { UserComponent } from './pages/user.component';
import { AdminComponent } from './pages/admin.component';
import { LoginComponent } from './pages/login.component';

const Routes = {
  User: 'user',
  Admin: 'admin',
  Login: 'login',
} as const;

export type RoutesType = (typeof Routes)[keyof typeof Routes];

const routesMap = new Map<RolesType, RoutesType>([
  [Roles.Admin, Routes.Admin],
  [Roles.User, Routes.User],
]);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: () => {
      const auth = inject(AuthService);
      const { role } = auth;

      if (!auth.isAuth()) return Routes.Login;
      return routesMap.get(role) || Routes.User;
    },
  },
  {
    path: Routes.Login,
    component: LoginComponent,
  },
  {
    path: Routes.User,
    component: UserComponent,
    canActivate: [() => inject(AuthService).isAuthGuard()],
  },
  {
    path: Routes.Admin,
    component: AdminComponent,
    canActivate: [() => inject(AuthService).isAuthGuard()],
  },
];
