import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseiosWalkerComponent } from './passeios-walker.component';

describe('PasseiosWalkerComponent', () => {
  let component: PasseiosWalkerComponent;
  let fixture: ComponentFixture<PasseiosWalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasseiosWalkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasseiosWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
