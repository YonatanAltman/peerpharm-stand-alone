import { TestBed } from '@angular/core/testing';

import { FeatureReportYonatanService } from './feature-report-yonatan.service';

describe('FeatureReportYonatanService', () => {
  let service: FeatureReportYonatanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureReportYonatanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
