import { Component, OnInit } from '@angular/core';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SquirrelLogoComponent,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../styles.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (!this.loginForm.valid){
      alert('Error');
    } else {
      alert('Redirecting to your Home');
      //route to /home
    }
  }
}