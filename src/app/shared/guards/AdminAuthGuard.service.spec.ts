/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminAuthGuard } from './AdminAuthGuard.service';

describe('Service: AdminAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuard]
    });
  });

  it('should ...', inject([AdminAuthGuard], (service: AdminAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
