import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroWalkerComponent } from './cadastro-walker/cadastro-walker.component';
import { PasseiosWalkerComponent } from './passeios-walker/passeios-walker.component';



@NgModule({
  declarations: [
    CadastroWalkerComponent,
    PasseiosWalkerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WalkerModule { }
