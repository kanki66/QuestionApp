import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { SuccedPostComponent } from '../succed-post/succed-post.component';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent {
  gender: string = "";
  question: string = "";
  priority: string = "";
  button_state: boolean = true;

  constructor(private http: HttpClient, public dialog: MatDialog) {

  }

  openSucceed() {
    this.dialog.open(SuccedPostComponent);
  }

  send_question() {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE'
      });
      
    let timestamp = new Date()
    let question_string = {
      question: this.question,
      gender: this.gender,
      priority: this.priority,
      timestamp: timestamp,
      timestamp_formated: timestamp.getDate() + '.' + (timestamp.getMonth()+1) + '.' + timestamp.getFullYear() +', '+ timestamp.getHours()+':' + timestamp.getMinutes()+' Uhr'
    }

    this.http.post("http://trdserver.dedyn.io:5000/questions/", question_string, {headers})
      .subscribe(data =>{
        console.log(data);
        this.question = "";
        this.priority = "";
        this.gender = "";
        this.openSucceed()
      })
  }
}
