import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './routes';

import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <!-- The routed views render in the <router-outlet>-->
  <router-outlet></router-outlet>`,
})
export class App {
  title = 'routing-app';
}

bootstrapApplication(App, { providers: [provideRouter(routes)] });
