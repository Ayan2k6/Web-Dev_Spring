import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-container">
      <h1>Welcome to Album Browser</h1>
      <p>Explore thousands of albums and their photos using our application.</p>
      <button routerLink="/albums">Browse Albums</button>
    </div>
  `
})
export class HomeComponent {}