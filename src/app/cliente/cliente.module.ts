import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { AgendamentosClienteComponent } from './agendamentos-cliente/agendamentos-cliente.component';



@NgModule({
  declarations: [
    CadastroClienteComponent,
    AgendamentosClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
