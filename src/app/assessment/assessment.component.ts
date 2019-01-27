import { Component, OnInit } from '@angular/core';
import { GetResultService } from '../services/get-result.service';
import { Router,ActivatedRoute } from '@angular/router';
import { IQuestionModel } from '../models/QuestionModel';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  data = [];
  constructor(
    private resultService: GetResultService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.resultService.getAllResult('http://localhost:51384/api/QuestionModel').subscribe(
      (data) => {
        this.data = data;
      });
  }

  navigate(url:string, id?:number)
  {
    if(id)
    {
    this.router.navigate([url+id]);
  }else{
    this.router.navigate([url]);
  }

  }
}
