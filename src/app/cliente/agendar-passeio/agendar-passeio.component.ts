import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-agendar-passeio',
  templateUrl: './agendar-passeio.component.html',
  styleUrls: ['./agendar-passeio.component.css']
})
export class AgendarPasseioComponent {
  passeioForm: FormGroup;
  historicoPasseios: any[] = [];

  constructor(private fb: FormBuilder) {
    this.passeioForm = this.fb.group({
      nomeCliente: [''],
      endereco: [''],
      telefone: [''],
      quantidadePets: [''],
      nomesPets: this.fb.array([]),
      horario: [''],
      dogwalkerId: ['']
    });
  }

  addPet() {
    const nomesPets = this.passeioForm.get('nomesPets') as FormArray;
    nomesPets.push(this.fb.control(''));  // Adiciona um controle vazio para cada novo pet
  }

  get nomesPets(): FormArray {
    return this.passeioForm.get('nomesPets') as FormArray;
  }

  agendarPasseio() {
    this.historicoPasseios.push(this.passeioForm.value);
    this.passeioForm.reset();
  }
}