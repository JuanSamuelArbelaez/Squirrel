import { Component } from '@angular/core';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [SquirrelLogoComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
