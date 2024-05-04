import { Component } from '@angular/core';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';
import { UrlLogComponent } from '../url-log/url-log.component';
import { CommonModule } from '@angular/common';
import { SquirrelDisplay } from '../../models/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SquirrelLogoComponent, UrlLogComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  urlLogs: SquirrelDisplay[] = [
    { id: 1, url: 'www.twitter.es', username: 'abcdefg', password: '123456', isBeingEdited: false},
    { id: 2, url: 'www.instagram.es', username: 'abcdefg', password: '123456', isBeingEdited: false },
    { id: 3, url: 'www.unisabaneta.es', username: 'abcdefg', password: '123456', isBeingEdited: false },
    { id: 4, url: 'www.facebook.es', username: 'abcdefg', password: '123456', isBeingEdited: false },
    { id: 5, url: 'www.snapchat.es', username: 'abcdefg', password: '123456', isBeingEdited: false},
    { id: 6, url: 'www.lol.es', username: 'abcdefg', password: '123456', isBeingEdited: false },
    { id: 7, url: 'www.ph.es', username: 'abcdefg', password: '123456', isBeingEdited: false },
    { id: 8, url: 'www.gmail.es', username: 'abcdefg', password: '123456', isBeingEdited: false }
  ];

  add(){

  }
}
