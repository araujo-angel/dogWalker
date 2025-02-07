import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseiosAgendadosComponent } from './passeios-agendados.component';

describe('PasseiosAgendadosComponent', () => {
  let component: PasseiosAgendadosComponent;
  let fixture: ComponentFixture<PasseiosAgendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasseiosAgendadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasseiosAgendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
