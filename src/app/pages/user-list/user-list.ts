import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule], // Importa o CommonModule para usar *ngFor e *ngIf
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = []; // Array para armazenar os usuários

  // Injetamos o nosso UserService
  constructor(private userService: UserService) {}

  // ngOnInit é um método do ciclo de vida do Angular que corre quando o componente é iniciado
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
