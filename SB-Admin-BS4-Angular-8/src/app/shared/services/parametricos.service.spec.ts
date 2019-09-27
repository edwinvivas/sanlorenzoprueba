import { TestBed } from '@angular/core/testing';

import { ParametricosService } from './parametricos.service';

describe('ParametricosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametricosService = TestBed.get(ParametricosService);
    expect(service).toBeTruthy();
  });
});
