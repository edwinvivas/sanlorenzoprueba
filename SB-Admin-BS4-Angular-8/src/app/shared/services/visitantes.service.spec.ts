import { TestBed } from '@angular/core/testing';

import { VisitantesService } from './visitantes.service';

describe('VisitantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitantesService = TestBed.get(VisitantesService);
    expect(service).toBeTruthy();
  });
});
