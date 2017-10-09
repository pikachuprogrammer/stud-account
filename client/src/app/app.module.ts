import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PaginatorModule} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyDatePickerModule} from 'mydatepicker';

import { StudentsListService } from './students-list/students-list.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule, MyDatePickerModule, HttpModule, PaginatorModule
  ],
  providers: [StudentsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
