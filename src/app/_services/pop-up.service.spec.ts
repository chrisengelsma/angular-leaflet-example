import { TestBed } from '@angular/core/testing';

import { PopUpService } from './pop-up.service';

describe('PopUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopUpService = TestBed.get(PopUpService);
    expect(service).toBeTruthy();
  });
});
