import { Component, OnInit } from '@angular/core';
import { GetResultService } from '../services/get-result.service';
import { ActivatedRoute } from '@angular/router';
import { IQuestionAnswer } from '../models/UserResultsMode';
import { QuestionAnswer } from '../models/QuestionAnswerModel';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  details = []; // it has id
  data = [];
  givenanswerid = [];
  rightanswerid = [];
  loading:boolean = true;

  stopLoading()
  {
    this.loading = !this.loading;
  }

  constructor(private resultService: GetResultService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.details = params.id)
   }

  ngOnInit() {
    this.GetDetails(this.details)
  }

  GetDetails(user)
  {
    if(user.length === 1)
    {
      //call services from here...
      this.resultService.getAllResult('../assets/UserDetail.json').subscribe(
        data => {
          //console.log(data);
         data.forEach(obj => {
            obj.assessmentDetail.forEach(element => {
              // element.questionId
               this.getViewData(element.questionId,element.givenAnswerId,element.rightAnswerId);
            });
         })
        }
      )
    }
    return false;
  }

  getViewData(id,givenId,rightId)
  {
    var givenAnswer = {
      givenAnswer: givenId
    }
    var rightAnswer = {
      rightAnswer: rightId
    }
    this.givenanswerid.push(givenAnswer);
    this.rightanswerid.push(rightAnswer);
    console.log(this.rightanswerid);
    this.resultService.getQuestionAnswer('../assets/QuestionAnswer.json').subscribe(
      (data) => {
        this.data.push(data);
      },
      error => {
        console.log("Error happen: " + error);
      }
    )
  }
}
