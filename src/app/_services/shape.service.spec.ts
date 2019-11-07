import { TestBed } from '@angular/core/testing';

import { ShapeService } from './shape.service';

describe('ShapeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShapeService = TestBed.get(ShapeService);
    expect(service).toBeTruthy();
  });
});
