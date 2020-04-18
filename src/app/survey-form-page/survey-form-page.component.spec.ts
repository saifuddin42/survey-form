import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormPageComponent } from './survey-form-page.component';

describe('SurveyFormPageComponent', () => {
  let component: SurveyFormPageComponent;
  let fixture: ComponentFixture<SurveyFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
