import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserResult, IQuestionAnswer,UserResult } from '../models/UserResultsMode';
import { IQuestionModel } from '../models/QuestionModel'
import { assignmentDetails,category } from '../models/assignmentDetailsModel';
import { assignment } from '../models/assignmentModel';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable({
  providedIn: 'root'
})
export class GetResultService {

  constructor(private http: HttpClient) { }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }

  getAllResult(url:string): Observable<IUserResult[]> {
    return this.http.get<IUserResult[]>(url);
  }
  getResult(url:string): Observable<UserResult[]>
  {
    return this.http.get<UserResult[]>(url);
  }
  getAssessmentDetails(url:string): Observable<assignmentDetails[]>
  {
    return this.http.get<assignmentDetails[]>(url)
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

  save(url,assignment: assignmentDetails){
    let result;
    console.log(assignment.id);
    if (assignment.id) {
      result = this.http.put<assignmentDetails>('link',assignment);
    } else {
      result = this.http.post<assignmentDetails>(url, assignment, this.generateHeaders());
    }
    return result;
  }

  createAssignment(url:string, assignment:assignment)
  {
    return this.http.post(url,assignment,this.generateHeaders());
  }

  deleteAssignment(url:string)
  {
    return this.http.delete(url, this.generateHeaders());
  }
}
