import { Component, OnInit } from '@angular/core';
import { GetResultService } from '../services/get-result.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assessment-details',
  templateUrl: './assessment-details.component.html',
  styleUrls: ['./assessment-details.component.css']
})
export class AssessmentDetailsComponent implements OnInit {

  public assessmentId: number;
  public edit: boolean = false;
  public edited: boolean = false;
  assessmentDetails = [];
  allCategory = [];

  constructor(
    private resultService: GetResultService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.assessmentId = params.id)
  }

  ngOnInit() {
    this.getDetails(this.assessmentId);
  }

  getDetails(assessment: number) {
    //call services from here...
    this.resultService.getAllResult('../assets/GetAllCategory.json').subscribe(
      data => {
        this.allCategory = data;
        // console.log(this.allCategory);
      });

    this.resultService.getAllResult('../assets/questionModel.json').subscribe(
      data => {
        // console.log(data);
      });

    this.resultService.getAllResult('../assets/assessmentDetails.json').subscribe(
      data => {
        //console.log(data);
        this.assessmentDetails = data;
      });
  }

  EditTable() {
    this.edit = !this.edit;
    this.edited = !this.edited;
  }
}
