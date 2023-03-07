import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE'
  });

  all_questions:any = [{}];

  constructor(private http: HttpClient) {
    this.get_questions();
  }

  get_questions() {
    this.http.get("http://trdserver.dedyn.io:5000/questions/").subscribe((data:any) =>{
      console.log(data); 
      this.all_questions = data.database
    })
  }
}
