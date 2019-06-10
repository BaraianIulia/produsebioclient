import { TestBed } from '@angular/core/testing';

import { ProduseService } from './produse.service';

describe('ProduseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduseService = TestBed.get(ProduseService);
    expect(service).toBeTruthy();
  });
});
