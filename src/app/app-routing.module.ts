import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarPasseioComponent } from './cliente/agendar-passeio/agendar-passeio.component';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';


const routes: Routes = [
  { path: 'agendar-passeio', component: AgendarPasseioComponent },
  { path: 'cliente-cadastro', component: ClienteCadastroComponent },
  { path: '', redirectTo: '/agendar-passeio', pathMatch: 'full' }, // Rota padrão, pode ser ajustada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
