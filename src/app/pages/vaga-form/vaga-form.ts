import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { Router } from '@angular/router'; // Importe o Router
import { VagaPayload, VagaService } from '../../services/vaga';

@Component({
  selector: 'app-vaga-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione FormsModule aqui
  templateUrl: './vaga-form.html',
  styleUrls: ['./vaga-form.scss']
})
export class VagaFormComponent {
  // Objeto para fazer o binding com os campos do formulário
  vaga: VagaPayload = {
    nome: '',
    localizacao: '',
    descricao: ''
  };

  constructor(
    private vagaService: VagaService,
    private router: Router // Injete o Router
  ) {}

  // Método chamado quando o formulário é submetido
  onSubmit(): void {
    this.vagaService.createVaga(this.vaga).subscribe(() => {
      // Após o sucesso, navega de volta para a lista de vagas
      this.router.navigate(['/vagas']);
    });
  }
}
