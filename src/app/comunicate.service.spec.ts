import { TestBed } from '@angular/core/testing';

import { ComunicateService } from './comunicate.service';

describe('ComunicateService', () => {
  let service: ComunicateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
