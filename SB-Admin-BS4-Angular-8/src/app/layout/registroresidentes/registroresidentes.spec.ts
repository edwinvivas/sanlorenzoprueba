import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroresidentesComponent } from './registroresidentes.component';

describe('RegistroresidentesComponent', () => {
    let component: RegistroresidentesComponent;
    let fixture: ComponentFixture<RegistroresidentesComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [RegistroresidentesComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistroresidentesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
