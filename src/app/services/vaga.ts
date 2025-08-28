import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; // 1. Importe o Subject
import { tap } from 'rxjs/operators';      // 2. Importe o tap

export interface Vaga {
  id: number;
  nome: string;
  localizacao: string;
  descricao: string;
  ativa: boolean;
}

export interface VagaPayload {
  nome: string;
  localizacao: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private apiUrl = 'http://localhost:8080/vagas';
  private _vagasUpdated$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get vagasUpdated$() {
    return this._vagasUpdated$.asObservable();
  }

  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  createVaga(vaga: VagaPayload): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl, vaga).pipe(
      tap(() => {
        // A CORREÇÃO ESTÁ AQUI: passamos 'undefined' como argumento
        this._vagasUpdated$.next(undefined);
      })
    );
  }
}
