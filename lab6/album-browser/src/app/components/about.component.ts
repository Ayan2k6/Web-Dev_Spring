import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h2>About This Application</h2>
      <p>This is an Album Browser built with Angular.</p>
      <p><strong>Developer:</strong> Ayan</p>
      <p><strong>Course:</strong> Web-Dev_Spring</p>
    </div>
  `
})
export class AboutComponent {}