import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MOHsReqComponent } from './mo-hs-req/mo-hs-req.component';
import { ContactComponent } from './contact/contact.component';
import { HourFormComponent } from './forms/hourForm.component';
import { SharedComponent } from './shared/shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contact/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './shared/services/alert.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './shared/services/auth.component'
import { TaskService } from './forms/task.service';
import { WebResquestService } from './forms/web-request.service';
import { NewListComponent } from './forms/new-list/new-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MOHsReqComponent,
    ContactComponent,
    HourFormComponent,
    SharedComponent,
    AlertComponent,
    AuthComponent,
    NewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,

  ],
  providers: [ContactService, TaskService, WebResquestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
