import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserResult, IQuestionAnswer } from '../models/UserResultsMode';
import { IQuestionModel } from '../models/QuestionModel'

@Injectable({
  providedIn: 'root'
})
export class GetResultService {

  constructor(private http: HttpClient) { }

  getAllResult(url:string): Observable<IUserResult[]> {
    return this.http.get<IUserResult[]>(url);
  }
  getAllModels(url:string): Observable<IQuestionModel[]>{
    return this.http.get<IQuestionModel[]>(url);
  }

  getQuestionAnswer(url:string): Observable<IQuestionAnswer[]> {
    return this.http.get<IQuestionAnswer[]>(url);
  }

  getQuestionAnswerModel(url:string): Observable<IQuestionModel[]> {
    return this.http.get<IQuestionModel[]>(url);
  }
}
