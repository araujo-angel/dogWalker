import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent {
  clienteForm: FormGroup;
  clientes: any[] = [];

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      cpf: [''],
      nome: [''],
      endereco: [''],
      telefone: [''],
      email: [''],
      pets: ['']
    });
  }

  cadastrarCliente() {
    this.clientes.push(this.clienteForm.value);
    this.clienteForm.reset();
  }
}