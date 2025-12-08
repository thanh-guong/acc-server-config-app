import { TestBed } from '@angular/core/testing';

import { AccConfigurationFormService } from './acc-configuration-form-service';

describe('AccConfigurationFormService', () => {
  let service: AccConfigurationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccConfigurationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
