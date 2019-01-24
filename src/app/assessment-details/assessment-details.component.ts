import { Component, OnInit } from '@angular/core';
import { GetResultService } from '../services/get-result.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { assignmentDetails  } from '../models/assignmentDetailsModel'

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

  assignmentDetails: FormGroup;

  // dynamically add row
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }
  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
  // end of dynamically add row

  constructor(
    private resultService: GetResultService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.assessmentId = params.id)
  }

  ngOnInit() {
    this.getDetails(this.assessmentId);

    this.assignmentDetails = new FormGroup({
      categoryId: new FormControl(),
      DisplayOrder: new FormControl(),
      numberOfQuestions: new FormControl()
    });
  }

  getDetails(assessment: number) {
    //call services from here...
    this.resultService.getAllResult('../assets/GetAllCategory.json').subscribe(
      data => {
        this.allCategory = data;
        // console.table(this.allCategory);
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

  deleteAssignmentDetails(id:number)
  {
    let url = 'localhost:4201/api/category/';
    url = url + id;
    let result = this.resultService.deleteAssignment(url);
    console.log(url);
    console.log(result);
  }

  onSubmit(): void {
    console.log(this.assignmentDetails.value);
  }
}
