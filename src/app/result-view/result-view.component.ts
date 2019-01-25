import { Component, OnInit } from '@angular/core';
import { GetResultService } from '../services/get-result.service';
import { IUserResult } from '../models/UserResultsMode';
import { IQuestionModel } from '../models/QuestionModel';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  results: IUserResult[];
  questionModelTitle = [];
  questionId: IUserResult[];
  ///public questionId= any[];

  public errorMessage: string = '';

  constructor(private resultService: GetResultService, private router: Router) { }

  ngOnInit() {
    this.loadResult();
  }

  loadResult() {
   this.resultService.getAllResult('http://localhost:51384/api/AssessmentDetail').subscribe(
      (data) => {
        this.results = data;
        data.forEach(obj =>{
          var modelId = obj.assignmentId;
          this.resultService.getAllModels('http://localhost:51384/api/QuestionModel/'+Number(modelId)+'/AssignmentDetail').subscribe(
            (data) => {
                this.questionModelTitle.push((this.findTitleById(data,modelId)));
             }, 
             (error) =>{
              console.log(error);
             }
          )
        });
      } 
    ) 
    
    this.getResult();
  }

  findTitleById(data,modelId)
  {
      if(data.id === modelId){
          return data.title;
    }
    return "";
  }

  getResult() {
      return null;
  }

  navigate(id:number)
  {
    this.questionId = this.results.filter(a=>a.userId==id);
    this.router.navigate(['./result/details/'+id])
  }
}
