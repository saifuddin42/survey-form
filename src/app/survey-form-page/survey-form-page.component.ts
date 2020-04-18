import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-survey-form-page',
  templateUrl: './survey-form-page.component.html',
  styleUrls: ['./survey-form-page.component.css']
})
export class SurveyFormPageComponent implements OnInit {

  surveyForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.surveyForm = this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, Validators.required),
      address: this.fb.control(null, Validators.required),
      city: this.fb.control(null, Validators.required),
      state: this.fb.control(null, Validators.required),
      zip: this.fb.control(null, Validators.required),
      phone: this.fb.control(null, Validators.required),
      email: this.fb.control(null, Validators.required),
      likes: this.fb.group({
        student: this.fb.control(null),
        location: this.fb.control(null),
        campus: this.fb.control(null),
        atmosphere: this.fb.control(null),
        dorms: this.fb.control(null),
        sports: this.fb.control(null)
      }),
      interests: this.fb.control(null),
      recommend: this.fb.control('Select an option')
    });
  }

}
