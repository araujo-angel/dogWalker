import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalkerCadastroComponent } from './walker-cadastro/walker-cadastro.component';
import { PasseiosAgendadosComponent } from './passeios-agendados/passeios-agendados.component';



@NgModule({
  declarations: [
    WalkerCadastroComponent,
    PasseiosAgendadosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DogwalkerModule { }
