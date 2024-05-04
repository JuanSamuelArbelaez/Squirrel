import { Component } from '@angular/core';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [SquirrelLogoComponent],
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.scss'
})
export class PasswordRecoveryComponent {
}
