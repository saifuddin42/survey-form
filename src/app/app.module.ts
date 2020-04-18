import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SurveyFormPageComponent } from './survey-form-page/survey-form-page.component';
import { SurveyListPageComponent } from './survey-list-page/survey-list-page.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'survey-form', component: SurveyFormPageComponent },
  { path: 'survey-list', component: SurveyListPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SurveyFormPageComponent,
    SurveyListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
