import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list';
import { VagaListComponent } from './pages/vaga-list/vaga-list';
import { VagaFormComponent } from './pages/vaga-form/vaga-form';

export const routes: Routes = [
  // Redireciona a rota raiz '' para '/usuarios'
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  // Quando a URL for /usuarios, exibe o UserListComponent
  { path: 'usuarios', component: UserListComponent },
  { path: 'vagas', component: VagaListComponent },
  { path: 'vagas/novo', component: VagaFormComponent }
];
