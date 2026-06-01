import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .app-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: #1976d2;
        color: white;
      }
      .app-header nav a {
        color: white;
        margin-left: 1rem;
        text-decoration: none;
      }
    `
  ]
})
export class HeaderComponent {}
