import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vaga, VagaService } from '../../services/vaga';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs'; // 1. Importe o Subscription

@Component({
  selector: 'app-vaga-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vaga-list.html',
  styleUrls: ['./vaga-list.scss']
})
export class VagaListComponent implements OnInit, OnDestroy { // 2. Implemente o OnDestroy
  vagas: Vaga[] = [];
  // 3. Crie uma propriedade para guardar a nossa "inscrição"
  private vagasSubscription: Subscription | undefined;

  constructor(private vagaService: VagaService) {}

  ngOnInit(): void {
    this.loadVagas();

    // 4. Inscreva-se para ouvir os avisos de atualização
    this.vagasSubscription = this.vagaService.vagasUpdated$.subscribe(() => {
      this.loadVagas(); // Recarrega as vagas sempre que um aviso é recebido
    });
  }

  // 5. Cancele a inscrição quando o componente for destruído para evitar fugas de memória
  ngOnDestroy(): void {
    this.vagasSubscription?.unsubscribe();
  }

  loadVagas(): void {
    this.vagaService.getVagas().subscribe(data => {
      this.vagas = data;
    });
  }
}
