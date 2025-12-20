import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRulesFormComponent } from './event-rules-form-component';

describe('EventRulesFormComponent', () => {
  let component: EventRulesFormComponent;
  let fixture: ComponentFixture<EventRulesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRulesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRulesFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
