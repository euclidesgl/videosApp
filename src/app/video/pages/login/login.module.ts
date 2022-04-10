import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogformModule } from '../logform/logform.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LogformModule    
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
