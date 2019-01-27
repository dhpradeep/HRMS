import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';

import { HttpClientModule } from '@angular/common/http';
import { GetResultService } from './services/get-result.service';
import { DetailsViewComponent } from './details-view/details-view.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderByPipe } from './pipes/OrderBy';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentDetailsComponent } from './assessment-details/assessment-details.component';

import { FormsModule } from '@angular/forms';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultViewComponent,
    ErrorComponent,
    HomepageComponent,
    DetailsViewComponent,
    OrderByPipe,
    AssessmentComponent,
    AssessmentDetailsComponent,
    AddAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [GetResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
