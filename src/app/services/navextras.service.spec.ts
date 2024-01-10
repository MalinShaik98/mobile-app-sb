import { TestBed } from '@angular/core/testing';

import { NavextrasService } from './navextras.service';

describe('NavextrasService', () => {
  let service: NavextrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavextrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
