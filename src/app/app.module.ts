
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MissionCreateComponent } from './mission-create/mission-create.component';
import { MissionEditComponent } from './mission-edit/mission-edit.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { FormsModule } from '@angular/forms';
import {UserAuthetificationComponent} from './user-authetification/user-authetification.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MissionCreateComponent,
    MissionEditComponent,
    MissionListComponent,
    UserAuthetificationComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


