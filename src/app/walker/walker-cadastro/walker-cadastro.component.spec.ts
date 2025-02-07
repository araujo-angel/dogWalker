import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerCadastroComponent } from './walker-cadastro.component';

describe('WalkerCadastroComponent', () => {
  let component: WalkerCadastroComponent;
  let fixture: ComponentFixture<WalkerCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalkerCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalkerCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
