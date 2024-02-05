import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppModule { }
