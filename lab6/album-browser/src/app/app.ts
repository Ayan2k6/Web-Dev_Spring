import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/albums" routerLinkActive="active">Albums</a>
    </nav>
    <main style="padding: 20px;">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    nav { background-color: #333; padding: 15px; }
    nav a { color: white; text-decoration: none; margin-right: 20px; font-weight: bold; }
    nav a.active { color: #4CAF50; border-bottom: 2px solid #4CAF50; }
  `]
})
export class App {} // <-- Главное, чтобы тут было App, а не AppComponent