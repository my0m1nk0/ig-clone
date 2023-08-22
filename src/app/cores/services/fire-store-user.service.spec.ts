import { TestBed } from '@angular/core/testing';

import { FireStoreUserService } from './fire-store-user.service';

describe('FireStoreUserService', () => {
  let service: FireStoreUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireStoreUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
