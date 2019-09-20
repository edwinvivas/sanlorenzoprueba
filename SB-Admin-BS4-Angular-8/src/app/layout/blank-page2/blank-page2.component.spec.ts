import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankPage2Component } from './blank-page2.component';

describe('BlankPage2Component', () => {
    let component: BlankPage2Component;
    let fixture: ComponentFixture<BlankPage2Component>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [BlankPage2Component]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(BlankPage2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
