import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importe o RouterLink e o RouterOutlet
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Adicione-os ao array de imports
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'plataforma-admin-web';
}
