import { Component, OnInit } from '@angular/core';
import { SquirrelLogoComponent } from '../squirrel-logo/squirrel-logo.component';
import { UrlLogComponent } from '../url-log/url-log.component';
import { CommonModule } from '@angular/common';
import { Squirrel, SquirrelDisplay } from '../../models/models';
import { SquireService } from '../../services/squireServices';
import { TokenService } from '../../services/tokenService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SquirrelLogoComponent, UrlLogComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.loadSquires();
  }

  constructor(private squireServices: SquireService, private tokenServices: TokenService){}

  urlLogs: SquirrelDisplay[] = [];

  async add(){
    let v_url: string | null
    let v_username: string | null
    let v_password: string | null
    let v_id: string = ""
    let v_userId: string = this.tokenServices.getUserID();
    
    v_url = prompt("Indique la URL", "url.example.com");
    if (!v_url) { return }

    v_username = prompt("Indique el Username", "JhonDoe");
    if (!v_username) { return }

    v_password = prompt("Indique la Password", "securePassword");
    if (!v_password) { return }

    var data: Squirrel = {
      id: v_id,
      url: v_url,
      user_id: v_userId,
      username: v_username,
      password: v_password,
    }

    this.squireServices.addSquire(data).then((response) => {
      v_id = response.id;
      console.log(v_id);
      this.urlLogs.push(new SquirrelDisplay(v_id, data.url, data.username, data.password))
      this.sortUrlLogs();
    }).catch((error) => {
      alert(error);
    })
  }

  private sortUrlLogs() {
    this.urlLogs.sort((a, b) => a.id.localeCompare(b.id));
  }

  async loadSquires() {
    const userID = this.tokenServices.getUserID();
    this.squireServices.getSquiresByUser(userID).then((response) => {
      console.log(response);
      this.urlLogs = response;
      this.sortUrlLogs();
    }).catch((error) => {
      console.error(error);
    });
  }
}
