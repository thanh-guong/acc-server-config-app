import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistRulesFormComponent } from './assist-rules-form-component';

describe('AssistRulesFormComponent', () => {
  let component: AssistRulesFormComponent;
  let fixture: ComponentFixture<AssistRulesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistRulesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistRulesFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
