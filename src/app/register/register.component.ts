import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, ReactiveFormsModule} from '@angular/forms';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SquirrelLogoComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../styles.scss']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.registerForm.valid){
      alert('Error')
    }
  }

}
