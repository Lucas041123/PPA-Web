import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definimos uma interface para tipar a resposta da API, o que é uma boa prática
export interface User {
  id: number;
  nome: string;
  email: string;
  empresa: string;
  bio: string;
  habilidades: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/usuarios'; // URL da nossa API

  constructor(private http: HttpClient) { }

  // Método que retorna um Observable com a lista de usuários
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
