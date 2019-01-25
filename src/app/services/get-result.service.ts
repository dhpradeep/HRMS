import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserResult, IQuestionAnswer,UserResult } from '../models/UserResultsMode';
import { IQuestionModel } from '../models/QuestionModel'
import { assignmentDetails,category } from '../models/assignmentDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class GetResultService {

  constructor(private http: HttpClient) { }

  getAllResult(url:string): Observable<IUserResult[]> {
    return this.http.get<IUserResult[]>(url);
  }
  getResult(url:string): Observable<UserResult[]>
  {
    return this.http.get<UserResult[]>(url);
  }
  getAllCategory(url:string): Observable<category[]> {
    return this.http.get<category[]>(url);
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

  save(assignment: assignmentDetails): Observable<assignmentDetails> {
    let result: Observable<assignmentDetails>;
    if (assignment.id) {
      result = this.http.put<assignmentDetails>('link',assignment);
    } else {
      result = this.http.post<assignmentDetails>('link', assignment);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete('link'+id);
  }


  deleteAssignment(url:string)
  {
    return this.http.delete(url);
  }
}
