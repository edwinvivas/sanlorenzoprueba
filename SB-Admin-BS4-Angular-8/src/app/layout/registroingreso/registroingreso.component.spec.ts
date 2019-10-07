import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroingresoComponent } from './registroingreso.component';

describe('RegistroingresoComponent', () => {
  let component: RegistroingresoComponent;
  let fixture: ComponentFixture<RegistroingresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroingresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
