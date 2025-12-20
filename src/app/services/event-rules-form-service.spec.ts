import { TestBed } from '@angular/core/testing';

import { EventRulesFormService } from './event-rules-form-service';

describe('EventRulesFormService', () => {
  let service: EventRulesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventRulesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
