import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.sortUrlLogs();
  }

  urlLogs: SquirrelDisplay[] = [];

  add(){
    this.urlLogs.push(new SquirrelDisplay(this.urlLogs.keys.length+1, 'templateUrl', 'JhonDoe', 'securePassword'))
    this.sortUrlLogs();
  }

  private sortUrlLogs() {
    this.urlLogs.sort((a, b) => b.id - a.id);
  }
}
