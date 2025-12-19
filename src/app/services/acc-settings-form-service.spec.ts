import { TestBed } from '@angular/core/testing';

import { AccSettingsFormService } from './acc-settings-form-service';

describe('AccSettingsFormService', () => {
  let service: AccSettingsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccSettingsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
