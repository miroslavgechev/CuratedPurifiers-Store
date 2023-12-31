import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { authRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignUpComponent, SignInComponent, ],
  imports: [CommonModule, authRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
