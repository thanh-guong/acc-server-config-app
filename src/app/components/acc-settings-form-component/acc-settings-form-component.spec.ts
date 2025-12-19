import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccSettingsFormComponent } from './acc-settings-form-component';

describe('AccSettingsFormComponent', () => {
  let component: AccSettingsFormComponent;
  let fixture: ComponentFixture<AccSettingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccSettingsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccSettingsFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
