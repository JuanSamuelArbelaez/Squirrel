import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, ReactiveFormsModule} from '@angular/forms';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SquirrelLogoComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../styles.scss']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: RouterModule) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', Validators.required,],
      consentimiento: ['', Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (!this.registerForm.valid){
      alert('Error');
    } else {
      alert('Redirecting to your Home');
    }
  }

  isPasswordMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('passwordConfirm')?.value;
    return password === confirmPassword;
  }

}
