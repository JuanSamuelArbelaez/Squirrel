import { Component, OnInit } from '@angular/core';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SquirrelLogoComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../styles.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      // Cambiar el campo de 'username' a 'email'
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      alert("Form is invalid!");
    }
  }

}
