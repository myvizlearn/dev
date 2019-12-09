import { TestBed, async, inject } from '@angular/core/testing';

import { ViewSamplePageGuard } from './view-sample-page.guard';

describe('ViewSamplePageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewSamplePageGuard]
    });
  });

  it('should ...', inject([ViewSamplePageGuard], (guard: ViewSamplePageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
