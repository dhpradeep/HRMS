import { Component, OnInit } from '@angular/core';
import { GetResultService } from '../services/get-result.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

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
  editDetails: assignmentDetails = new assignmentDetails();
  selectedCategory = [];

  // assignment
  assignment: assignmentDetails = new assignmentDetails();

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
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => this.assessmentId = params.id)
  }

  ngOnInit() {
    this.getDetails(this.assessmentId);
  }

  getDetails(assessment: number) {
    //call services from here...
    this.resultService.getAllCategory('http://localhost:51384/api/QuestionCategory').subscribe(
      data => {
       data.forEach(obj => {
          this.allCategory.push(obj);
          this.findCategoryName(this.allCategory);
       });
      },
      (error) => {
        console.log(error);
      });

    this.resultService.getAllResult('http://localhost:51384/api/QuestionModel/'+assessment).subscribe(
      data => {
        // console.log(data);
      });

    this.resultService.getAssessmentDetails('http://localhost:51384/api/AssignmentDetail/'+assessment).subscribe(
      data => {
        this.assessmentDetails = data;
      });
  }

  findCategoryName(allCategory)
  {
    // let data = [];
    // data.push(allCategory);
    // console.log(data);
  }

  EditTable(id:number,catId:number,displayOrder:number,noofqstn:number) {
    //this.edit = !this.edit;
    //this.edited = !this.edited;
    this.editDetails.id = id;
    this.editDetails.categoryId = catId;
    this.editDetails.displayOrder = displayOrder;
    this.editDetails.numberOfQuestions = noofqstn
    console.log(this.editDetails);
  }

  deleteAssignmentDetails(id:number,index:number)
  {
    let url = 'http://localhost:51384/api/AssignmentDetail/'+id;
    console.log(url);
    let result = this.resultService.deleteAssignment(url);
    console.log(result)
    this.assessmentDetails.splice(index, 1);
  }

  save(form: any) {
    this.resultService.save('http://localhost:51384/api/AssignmentDetail/',form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
    console.log(form);
  }

  gotoList() {
    this.router.navigate(['/assessment/details/',this.assessmentId]);
  }
}
