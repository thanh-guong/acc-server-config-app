import { TestBed } from '@angular/core/testing';

import { AssistRulesService } from './assist-rules-service';

describe('AssistRulesService', () => {
  let service: AssistRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssistRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
