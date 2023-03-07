import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UsedMaterialModule} from './used-material/used-material.module';
import { AskComponent } from './ask/ask.component';
import { QuestionsComponent } from './questions/questions.component'
import { FormsModule } from '@angular/forms';
import { SuccedPostComponent } from './succed-post/succed-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AskComponent,
    QuestionsComponent,
    SuccedPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsedMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
