import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SoftwareDevelopmentServiceComponent } from './software-development-service/software-development-service.component';
import { HomeComponent } from './home/home.component';
import { EsiComponent } from './esi/esi.component';
import { BpasiComponent } from './bpasi/bpasi.component';
import { HowWeExeComponent } from './how-we-exe/how-we-exe.component';
import { CompanyComponent } from './company/company.component';
import { AppRoutingModule } from './app-routing.module';
import { GetInTouchComponent } from './getInTouch/getInTouch.component';
import { TechPracticeComponent } from './tech-practice/tech-practice.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { VisionComponent } from './vision/vision.component';

@NgModule({
  imports: [
    BrowserModule,    
    AppRoutingModule,HttpModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    SoftwareDevelopmentServiceComponent,
    HomeComponent,
    EsiComponent,
    BpasiComponent,
    HowWeExeComponent,
    CompanyComponent,
    GetInTouchComponent,
    TechPracticeComponent,
    VisionComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
