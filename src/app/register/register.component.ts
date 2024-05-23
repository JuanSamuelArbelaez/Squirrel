import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, ReactiveFormsModule} from '@angular/forms';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserServices } from '../../services/userService';
import * as models from '../../models/models';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userServices: UserServices
  ) {
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
      alert('Error. Try with a valid registration form.');
      return;
    } 

    var data: models.Credentials = {
      Password: this.registerForm?.get('password')?.value,
      Nickname: this.registerForm?.get('nickname')?.value,
      Email: this.registerForm?.get('email')?.value,
      ID: ""
    };

    this.userServices.register(data)
    .then((response) => {
      alert('Registrations successfull. Refirecting to Login')
      this.router.navigate(['/login']);
    }).catch((error) => {
      alert('Registration unsuccessful: ' + error)
    });
  }

  isPasswordMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('passwordConfirm')?.value;
    return password === confirmPassword;
  }

}
