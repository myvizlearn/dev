import { TestBed, async, inject } from '@angular/core/testing';

import { ViewUserPagesGuard } from './view-user-pages.guard';

describe('ViewUserPagesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewUserPagesGuard]
    });
  });

  it('should ...', inject([ViewUserPagesGuard], (guard: ViewUserPagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
