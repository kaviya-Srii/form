import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Routes, RouterModule} from '@angular/router'
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
