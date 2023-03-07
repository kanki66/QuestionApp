import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskComponent } from './ask/ask.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: 'frage', component: AskComponent },
  { path: 'getquestions', component: QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
